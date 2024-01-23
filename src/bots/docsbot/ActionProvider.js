import SharedState from './SharedState';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;    
  }

  getCurrentState = () => {
    return { id: SharedState.data.currentFunction, stage: SharedState.data.currentStage };
  };

  handleMessageParserDocs = (ynresult) => {
    let messages
    if (SharedState.data.currentFunction === '故障通報' && ynresult) {      
      if(ynresult){
        //故障通報開單確認
        messages = this.createChatBotMessage(
          "故障通報已開單完成，單號：113-SR-00000213，請點此連結進入系統查看"
        );
        this.clearShareState();
      }else{
        //不開單,回到首頁
        this.handleDefault();
      }
    }else {
        messages = this.createChatBotMessage(
        "以下是車輛可用率：臺鐵公司累計至2024/01/22止，車輛數： 3197台，可用數： 2681台，可用率： 83%"
        ,
        // { widget: "messageParser", withAvatar: true }
        {
          withAvatar: true,
          widget: "overview",
        }
      );
    }
    

    this.addMessageToBotState(messages);
  };
  handleActionGenerateFNM = (id) => {
    SharedState.data.currentFunction = id;
    const nextStage = SharedState.data.currentStage + 1;
    let messages;

     // 查找匹配的 function 和 stage
    const functionData = SharedState.functions.find(f => f.function === id && f.stage === nextStage);
    if (functionData) {
      // 如果找到匹配的條目，則使用該條目的問題
      messages = this.createChatBotMessage(functionData.question, { widget: functionData.widget, withAvatar: true });
    } else {
      // 如果沒有匹配的條目，可以選擇使用默認消息或進行其他處理
      
      messages = this.createChatBotMessage(`你輸入的故障通報資訊為，
      車號：${SharedState.selectedcar}、
      地點為${SharedState.selectedplace}、
      車次為${SharedState.selectedtrainno}、
      故障描述為${SharedState.selecteddescription}，
      是否正確且確認要開單`, { widget: "ynoption",withAvatar: true });
    }
    // 更新階段
    SharedState.data.currentStage = nextStage;
    // 更新 currentId 和 currentStage    
    this.addMessageToBotState(messages);
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
  clearShareState = () => {
    SharedState.data.currentFunction = "";
    SharedState.data.currentStage = 0;
  };
  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: ""
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: ""
      }));
    }
  };

}


export default ActionProvider;
