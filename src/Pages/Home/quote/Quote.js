import QuoteCss from "./Quote.css";
import { ReactComponent as DoubleQuotationRight } from "../../../assets/Home/Double-Quotation-right.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { RightSideHandle } from "../../RightSide/RghtSide";

function Quote() {
  const QuoteOneTopRef = useRef();

  useEffect(() => {
    // RightSideDiv-Rectangle-1  === QuoteOne
    RightSideHandle(
      "RightSideDiv-Rectangle-1",
      QuoteOneTopRef.current.offsetTop
    );
    // RightSideDiv-Rectangle-1  === QuoteOne \\
  }, []);

  return (
    <div ref={QuoteOneTopRef} className="QuoteDiv">
      <div className="QuoteOne">
        <div className="QuoteOne2">
          <span className="QuoteOne-Double-Quotation-one">
            <DoubleQuotationRight />
          </span>
          <div className="Quote-one">
            <p>With great power comes great electricity bill</p>
          </div>
          <span className="QuoteOne-Double-Quotation-tow">
            <DoubleQuotationRight />
          </span>
        </div>
        {/* QuoteTow */}
        <div className="QuoteTow">
          <p>- Dr. Who</p>
        </div>
        {/* == QuoteTow ==*/}
      </div>
    </div>
  );
}

export default Quote;
