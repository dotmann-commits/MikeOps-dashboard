import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load?: (config: unknown) => void;
        open?: () => void;
        interact?: (action: unknown) => void;
      };
    };
  }
}

const VOICEFLOW_SCRIPT_ID = "voiceflow-chat-script";

export default function VoiceflowEmbed() {
  useEffect(() => {
    if (document.getElementById(VOICEFLOW_SCRIPT_ID)) return;

    const script = document.createElement("script");

    script.id = VOICEFLOW_SCRIPT_ID;
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      if (!window.voiceflow?.chat?.load) return;

      window.voiceflow.chat.load({
        verify: { projectID: "69da089cab005891dd1033cd" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        assistant: {
          title: "MikeOps AI",
          description:
            "AI automation consultant • workflow systems • operational intelligence",
          stylesheet:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap",
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
