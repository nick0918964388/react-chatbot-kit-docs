class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("可用率") ||
      lowerCase.includes("車輛可用率") ||
      lowerCase.includes("車輛相關可用")
    ) {
      return this.actionProvider.handleMessageParserDocs();
    }

    if (lowerCase.includes("action") || lowerCase.includes("actionprovider")) {
      return this.actionProvider.handleActionProviderDocs();
    }

    if (lowerCase.includes("config")) {
      return this.actionProvider.handleConfigDocs();
    }

    if (lowerCase.includes("widget")) {
      return this.actionProvider.handleWidgetDocs();
    }
    //不了解的問題回到greeing
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
