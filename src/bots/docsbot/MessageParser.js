import SharedState from './SharedState';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }


  parse = (message) => {
    const lowerCase = message.toLowerCase();
    
    // const currentState = this.actionProvider.getCurrentState();
    console.log(SharedState.data)
    // 檢查是否處於特定流程中
    if (SharedState.data.currentFunction === '故障通報') {
      this.actionProvider.handleActionGenerateFNM('故障通報');

    } else {
      if (
        lowerCase.includes("可用率") ||
        lowerCase.includes("車輛可用率") ||
        lowerCase.includes("車輛相關可用")
      ) {
        return this.actionProvider.handleMessageParserDocs();
      }
      if (lowerCase.includes('故障通報')) {
        return this.actionProvider.handleActionGenerateFNM('故障通報');
  
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
      //不了解的問題回到greeting
      return this.actionProvider.handleDefault();
    }
  };
}

export default MessageParser;
