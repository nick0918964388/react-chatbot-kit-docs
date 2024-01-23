import React from "react";
import Options from "../Options/Options";

const YNOptions = (props) => {
  let options = [
    {
      name: "是",
      handler: () => props.actionProvider.handleMessageParserDocs(true),
      id: 1,
    },{
      name: "否",
      handler: () => props.actionProvider.handleMessageParserDocs(false),
      id: 1,
    }    
  ];
  return <Options options={options} />;
};

export default YNOptions;
