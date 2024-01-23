import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import InformationBox from "../InformationBox/InformationBox";
import styles from "../docs/MessageParserDocs/MessageParserDocs.module.css";

import "./CarSelector.css";

const CarSelector = ({ selectedcar, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [Cars, setCars] = useState([]);
  const [showMessageParserInfoBox, setshowMessageParserInfoBox] = useState([true]);

  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "messageParser",
    }));
  }, [setState]);

  const CarOptions = [
    {
      iata: "請選擇",
      nameCompact: "請選擇",
    },{
      iata: "EMU901",
      nameCompact: "EMU901",
    },
    {
      iata: "EMU902",
      nameCompact: "EMU902",
    },
    {
      iata: "EMU903",
      nameCompact: "EMU903",
    }
  ];

  useEffect(() => {
    setCars(CarOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedcar: Cars.find(
        (Car) => Car.iata === e.target.value
      ),
    }));
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
    // <div>
    //   <h2 className="Car-selector-heading">Car</h2>
    // <select
    //           className="Car-selector"
    //           value={selectedcar.iata}
    //           onChange={handleSubmit}
    //         >
    //           {createCarOptions()}
    //         </select>
    // </div>
    <div className="Car-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}            
            <select
              className="Car-selector"
              value={selectedcar.iata}
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
              你選擇的車號: {selectedcar.nameCompact}
            </p>
          </>
        }
      />
      <div className={styles.overview}>      
      <ConditionallyRender
        ifTrue={showMessageParserInfoBox}
        show={
          <InformationBox setState={setState}>
            <p className={styles.infoBoxParagraph}>
              車輛可用率的計算：
            </p>
            <p className={styles.infoBoxParagraph}>
              
            </p>
          </InformationBox>
        }
      />
    </div>
    </div>
  );
};

export default CarSelector;
