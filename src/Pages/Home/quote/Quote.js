import QuoteCss from "./Quote.css";
import { ReactComponent as DoubleQuotationRight } from "../../../assets/Home/Double-Quotation-right.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { RightSideHandle } from "../../RightSide/LeftSide/RghtSide";

function Quote() {
  const [QuoteOneTop, setQuoteOneTop] = useState();
  const QuoteOneTopRef = useRef();

  useLayoutEffect(() => {
    // RightSideDiv-Rectangle-1  === QuoteOne
    let Rectangle1Top = QuoteOneTopRef.current.getBoundingClientRect();
    Rectangle1Top = Rectangle1Top.y - 14;
    RightSideHandle("RightSideDiv-Rectangle-1", Rectangle1Top);
    // RightSideDiv-Rectangle-1  === QuoteOne \\
  });

  return (
    <div className="QuoteDiv">
      <div className="QuoteOne" ref={QuoteOneTopRef}>
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
