import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import InformationBox from "../../InformationBox/InformationBox";
import styles from "../../docs/MessageParserDocs/MessageParserDocs.module.css";
import SharedState from '../../../SharedState';
import "../CarSelector/CarSelector.css";

const PlaceSelector = ({ selectedplace, infoBox,setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "messageParser",
    }));
  }, [setState]);
  const showMessageParserInfoBox = infoBox === "messageParser";
  const CarOptions = [
    {
      iata: "請選擇",
      nameCompact: "請選擇",
    },{
      iata: "台北",
      nameCompact: "台北",
    },
    {
      iata: "桃園",
      nameCompact: "桃園",
    },
    {
      iata: "新竹",
      nameCompact: "新竹",
    },
    {
      iata: "苗栗",
      nameCompact: "苗栗",
    },
    {
      iata: "台中",
      nameCompact: "台中",
    }
  ];
  

  useEffect(() => {
    setCars(CarOptions);
  }, []);

  const handleSubmit = (e) => {
    console.log("Target element:", e.target); // 应该是 select 元素
    console.log("Selected value:", e.target.value); // 应该是选中的 option 的 value
    const selectedValue = e?.target?.value;
    if (selectedValue) {
      setState((state) => ({
        ...state,
        selectedplace: Cars.find((Car) => Car.iata === selectedValue),
      }));
      SharedState.selectedplace = selectedValue;
    }
  };

  const handleConfirm = () => {
    actionProvider.handleActionGenerateFNM("故障通報");
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!Cars) return null;

  const createCarOptions = () => {
    return Cars.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };
  
  return (
    <div className="selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}            
            <select
              className="Car-selector"
              value={selectedplace.iata}
              onChange={handleSubmit}
            >
              {createCarOptions()}
            </select>
            <button className="Car-button-confirm" onClick={handleConfirm}>
              確認
            </button>
          </>
        }
        elseShow={
          <>            
            <p>
              你選擇的地點: {selectedplace.nameCompact}
            </p>
          </>
        }
      />
      <div className={styles.overview}>      
      <ConditionallyRender
        ifTrue={showMessageParserInfoBox}
        show={
          <InformationBox setState={setState}>
            <h2>Debug</h2>
            <p className={styles.infoBoxParagraph}>
            目前的功能模組：`{SharedState.data.currentFunction}`
            </p>
            <p className={styles.infoBoxParagraph}>
            目前的步驟：`{SharedState.data.currentStage}`
            目前的車輛：`{SharedState.selectedcar}`
            目前的地點：`{SharedState.selectedplace}`
            </p>
          </InformationBox>
        }
      />
    </div>
    </div>
  );
};

export default PlaceSelector;
