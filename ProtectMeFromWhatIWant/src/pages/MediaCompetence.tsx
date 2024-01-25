import { useState } from "react";
import { useTranslation } from "react-i18next";
import clearityMinimal from "../assets/klarheit.png";
import creativityMinimal from "../assets/kreativität.png";
import spotlight from "../assets/spotlight.png";
import spotlightMinimal from "../assets/spotlightMinimal.png";
import Spot from "../components/3D-Storytelling/Spot";
import SpotLightScene from "../components/SpotLightScene";
import "../components/styles/MediaCompetence.css";
import "../components/styles/global.css";

export default function MediaCompetence() {
  const { t } = useTranslation();
  const [selectedButton, setSelectedButton] = useState("konzentration");

  const handleButtonClick = (
    buttonType: "konzentration" | "kreativität" | "klarheit"
  ) => {
    setSelectedButton(buttonType);
  };

  return (
    <div>
      <div className="scroll-container" dir="ltr">
        <div className="hero-section">
          <div className="hero-section-headline">
            <h2>{t("mediaCompetenceH1")}</h2>
          </div>
          <div className="hero-section-visual">
            <Spot />
          </div>
          <div className="hero-section-content">
            <p>{t("mediaCompetenceContent1")}</p>
            <br />
            <br />
            <p>{t("mediaCompetenceContent2")}</p>
          </div>
          <div className="scroll-down-cta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
            >
              <path
                d="M1 0.999998L50 49M50 49H8M50 49V5.8"
                stroke="#E7E7E7"
                strokeWidth="2"
              />
            </svg>
            <div className="scroll-down-cta-text">
              <p>{t("cta1")}</p>
            </div>
          </div>
        </div>
        <div className="section-2-center">
          <div className="quote">
            <h3>{t("quoteText")}</h3>
            <p>{t("quoteAuthor")}</p>
          </div>
          <div className="text-column-section">
            <h4>{t("column1Title")}</h4>
            <h4>{t("column2Title")}</h4>
            <p className="text">{t("column1Text")}</p>
            <p className="text">{t("column2Text")}</p>
          </div>
          <div className="arrow-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="50"
              viewBox="0 0 52 50"
              fill="none"
            >
              <path
                d="M1.5 0.999998L50.5 49M50.5 49H8.5M50.5 49V5.8"
                stroke="#E7E7E7"
                strokeWidth="2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
            >
              <path
                d="M49.5 1L1.5 50M1.5 50V6.5M1.5 50H44.7"
                stroke="#E7E7E7"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3>Medienmündigkeit</h3>
        </div>
        <div className="section-3">
          <div className="content-block">
            <h4>{t("section3Headline")}</h4>
            <div className="thin">
              <p className="text">{t("section3Text")}</p>
            </div>
          </div>
          <div className="spotlight-section">
            <div className="image-column-section">
              <img width={"280px"} src={spotlight} />
              <div className="small">
                <p className="text">{t("imageColumnSectionText")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <SpotLightScene />
        </div>
        <div className="section-3">
          <div className="cta-sec-2">
            <div
              className={`button-outline ${
                selectedButton === "konzentration" ? "active-button" : ""
              }`}
            >
              <div
                className="button-outline-text"
                onClick={() => handleButtonClick("konzentration")}
              >
                {t("tab1Title")}
              </div>
            </div>
            <div
              className={`button-outline ${
                selectedButton === "kreativität" ? "active-button" : ""
              }`}
            >
              <div
                className="button-outline-text"
                onClick={() => handleButtonClick("kreativität")}
              >
                {t("tab2Title")}
              </div>
            </div>
            <div
              className={`button-outline ${
                selectedButton === "klarheit" ? "active-button" : ""
              }`}
            >
              <div
                className="button-outline-text"
                onClick={() => handleButtonClick("klarheit")}
              >
                {t("tab3Title")}
              </div>
            </div>
          </div>
          {selectedButton === "konzentration" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab1Title")}</h4>
                <p className="text">
                  {t("tab1Content1")}
                  <br />
                  {t("tab1Content2")}
                </p>
              </div>
              <img width={"350px"} src={spotlightMinimal} />
            </div>
          )}
          {selectedButton === "kreativität" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab2Title")}</h4>
                <p className="text">
                  {t("tab2Content")}
                  <br />
                  {t("tab2Content")}
                </p>
              </div>
              <img width={"500px"} src={creativityMinimal} />
            </div>
          )}
          {selectedButton === "klarheit" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab3Title")}</h4>
                <p className="text">
                  {t("tab3Content")}
                  <br />
                  {t("tab3Content")}
                </p>
              </div>
              <img width={"500px"} src={clearityMinimal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
