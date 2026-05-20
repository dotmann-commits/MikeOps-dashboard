type MikeOpsAIContext = {
  title?: string;
  name?: string;
  description?: string;
  subtitle?: string;
  summary?: string;
};

export function askMikeOpsAIAboutService(service: MikeOpsAIContext) {
  const serviceTitle = service?.title || service?.name || "this MikeOps service";
  const serviceDescription =
    service?.description ||
    service?.subtitle ||
    service?.summary ||
    "I want to understand how this service can help my business.";

  const message = `MIKEOPS_SERVICE_CARD_CONTEXT\n\nService: ${serviceTitle}\n\nContext: ${serviceDescription}\n\nExplain this MikeOps service in simple business language. Give one practical example. Ask one relevant follow-up question.`;

  const startChat = (attempt = 1) => {
    const chat = (window as any).voiceflow?.chat;

    if (!chat) {
      if (attempt < 10) setTimeout(() => startChat(attempt + 1), 500);
      return;
    }

    chat.open?.();

    setTimeout(() => {
      chat.interact?.({
        type: "text",
        payload: message,
      });
    }, 800);
  };

  startChat();
}
