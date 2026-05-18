import { useEffect } from "react";

export default function VoiceflowEmbed() {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      window.voiceflow?.chat.load({
        verify: { projectID: "69da089cab005891dd1033cd" },

        url: "https://general-runtime.voiceflow.com",

        versionID: "production",

        assistant: {
          title: "MikeOps AI",
          description:
            "AI automation consultant • workflow systems • operational intelligence",

          stylesheet:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
