import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    // {
    //   name: "查詢車輛可用率",
    //   handler:  () => props.actionProvider.handleMessageParserDocs(1),
    //   id: 1,
    // }
    ,{
      name: "本日故障通報立案",
      handler: () => props.actionProvider.handleActionGenerateFNM('故障通報'),
      id: 2,
    },
    // {
    //   name: "config",
    //   handler: props.actionProvider.handleConfigDocs,
    //   id: 2,
    // },
    // {
    //   name: "actionprovider",
    //   handler: props.actionProvider.handleActionProviderDocs,
    //   id: 3,
    // },
    // {
    //   name: "widgets",
    //   handler: props.actionProvider.handleWidgetDocs,
    //   id: 5,
    // },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
