import React from "react";
import Options from "../Options/Options";

const CarOptions = (props) => {
  let options = [
    {
      name: "EMU901",
      handler: () => props.actionProvider.handleActionGenerateFNM("故障通報"),
      id: 1,
    },{
      name: "EMU902",
      handler: () => props.actionProvider.handleActionGenerateFNM("故障通報"),
      id: 2,
    },{
      name: "EMU903",
      handler: () => props.actionProvider.handleActionGenerateFNM("故障通報"),
      id: 2,
    },{
      name: "EMU904",
      handler: () => props.actionProvider.handleActionGenerateFNM("故障通報"),
      id: 2,
    }      
  ];
  return <Options options={options} />;
};

export default CarOptions;
