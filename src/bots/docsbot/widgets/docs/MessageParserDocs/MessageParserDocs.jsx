import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";

import { ReactComponent as MessageParserOverview } from "../../../../../assets/img/message-parser-overview.svg";

import styles from "./MessageParserDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const MessageParserDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "messageParser",
    }));
  }, [setState]);

  const showMessageParserInfoBox = infoBox === "messageParser";

  return (
    <div className={styles.overview}>
      <FadeIn left by={250}>
        <MessageParserOverview className={styles.overviewSVG} />
      </FadeIn>

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
  );
};

export default MessageParserDocs;
