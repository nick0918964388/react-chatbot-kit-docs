import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./widgets/Overview/Overview";
import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "./widgets/docs/Config/Config";
import WidgetDocs from "./widgets/docs/WidgetDocs/WidgetDocs";
import YNOptions from "./widgets/options/YNOptions/YNOptions";
import CarOptions from "./widgets/options/CarOptions/CarOptions";
import CarSelector from "./widgets/CarSelector/CarSelector";

const botName = "智慧助理";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi 我是 ${botName}. 請提供相關問題，我將盡量提供解答`,
      {
        withAvatar: false,
        // delay: 500,
        widget: "overview",
      }
    ),    
    // createChatBotMessage(
    //   // "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
    //   "快速選擇",
    //   {
    //     withAvatar: false,
    //     // delay: 500,
    //     widget: "overview",
    //   }
    // ),
  ],
  state: {
    gist: "",
    infoBox: "",
    currentId:"",
    currentStage : 0,
    airports: [],
    selectedcar: { iata: "請選擇", nameCompact: "請選擇" },
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "carSelector",
      widgetFunc: (props) => <CarSelector {...props} />,
      mapStateToProps: ["selectedcar", "airports"],
    },
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },{
      widgetName: "ynoption",
      widgetFunc: (props) => <YNOptions {...props} />,
      mapStateToProps: ["gist"],
    },{
      widgetName: "caroption",
      widgetFunc: (props) => <CarOptions {...props} />,
      mapStateToProps: ["gist","infoBox"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ["gist", "infoBox","currentId","currentStage"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "config",
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "widget",
      widgetFunc: (props) => <WidgetDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
  ],
};

export default config;
