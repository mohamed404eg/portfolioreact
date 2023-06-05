import QuoteCss from "./Quote.css";
import { ReactComponent as DoubleQuotationRight } from "../../../assets/Home/Double-Quotation-right.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { RightSideHandle } from "../../RightSide/RghtSide";
import GetCoords from "../../../hooks/GetCoords";
import { useTranslation } from "react-i18next";

function Quote() {
  const { t, i18n } = useTranslation();
  const QuoteOneTopRef = useRef();

  useEffect(() => {
    // RightSideDiv-Rectangle-1  === QuoteOne
    RightSideHandle(
      "RightSideDiv-Rectangle-1",
      GetCoords(QuoteOneTopRef.current).top
    );
    // RightSideDiv-Rectangle-1  === QuoteOne \\
    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSideDiv-Rectangle-1",
        GetCoords(QuoteOneTopRef.current).top
      );
    });
  }, []);

  return (
    <div ref={QuoteOneTopRef} className="QuoteDiv">
      <div className="QuoteOne">
        <div className="QuoteOne2">
          <span className="QuoteOne-Double-Quotation-one">
            <DoubleQuotationRight />
          </span>
          <div className="Quote-one">
            <p>{t("Quote-one")}</p>
          </div>
          <span className="QuoteOne-Double-Quotation-tow">
            <DoubleQuotationRight />
          </span>
        </div>
        {/* QuoteTow */}
        <div className="QuoteTow">
          <p>{t("QuoteTow")}</p>
        </div>
        {/* == QuoteTow ==*/}
      </div>
    </div>
  );
}

export default Quote;
