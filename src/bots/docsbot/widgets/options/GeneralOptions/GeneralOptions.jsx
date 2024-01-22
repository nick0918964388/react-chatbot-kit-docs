import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "查詢車輛可用率",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },{
      name: "查詢車輛SOP",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
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
