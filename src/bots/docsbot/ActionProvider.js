class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;    
    // 初始化狀態
    this.state = {
      currentId: null,
      currentStage: 0,
    };
  }

  getCurrentState = () => {
    return { id: this.state.currentId, stage: this.state.currentStage };
  };

  handleMessageParserDocs = () => {
    const messages = this.createChatBotMessage(
      "以下是車輛可用率：臺鐵公司累計至2024/01/22止，車輛數： 3197台，可用數： 2681台，可用率： 83%"
      ,
      // { widget: "messageParser", withAvatar: true }
      {
        withAvatar: true,
        widget: "overview",
      }
    );

    this.addMessageToBotState(messages);
  };
  handleActionGenerateFNM = (id) => {
    this.state.currentId = id;
    const nextStage = this.state.currentStage + 1;
    let messages;

    if (nextStage === 1) {
      // 第一階段：輸入車號
      messages = this.createChatBotMessage("請輸入車號", { withAvatar: true });
    } else if (nextStage === 2) {
      // 第二階段：輸入地點
      messages = this.createChatBotMessage("請輸入地點", { withAvatar: true });
    }
    // 更新階段
    this.state.currentStage = nextStage;
    // 更新 currentId 和 currentStage
    const newState = {
      currentId: id,
      currentStage: this.state.currentStage + 1,
    };
    this.addMessageToBotState(messages,newState);
  };

  handleActionProviderDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "The action provider defines the bots response after the message is parsed.",
        { widget: "actionProviderDocs", withAvatar: true }
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "The config controls every configurable aspect of the chatbot.",
      { widget: "config", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleWidgetDocs = () => {
    const messages = this.createChatBotMessage(
      "Widgets are custom components that you want to render with a chatbot response.",
      { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "請提供的你的問題，我才能進行回答",
      // {
      //   withAvatar: true,
      //   widget: "overview",
      // }
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
        currentId:"故障通報"
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
        currentId:"故障通報"
      }), () => {
        console.log("New state: ", this.state);
      });
    }
  };

  getCurrentState = () => {
    this.setState(state => {
      console.log(state)
      // Perform your tasks here
      
      return state
  })
  };
}


export default ActionProvider;
