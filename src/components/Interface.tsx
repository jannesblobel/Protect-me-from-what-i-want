import { useTranslation } from "react-i18next";
import hookModel from "../assets/hookmodel.png";
import Footer from "./Footer";
import "./styles/Interface.scss";
import "./styles/global.scss";

type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  const { children } = props;
  return <section className="section">{children}</section>;
};

export default function Interface() {
  const { t } = useTranslation();

  return (
    <div className="container-section" id="scroll-container">
      <Section>
        <h1 className="h1-pxgrotesk"></h1>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("intro-h2")}</h2>
          <p>{t("intro-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("consuming-media-h2")}</h2>
          <p>{t("consuming-media-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("information-realm-h2")}</h2>
          <p>{t("information-realm-p")}</p>
          <img src={hookModel} alt="placeholder" style={{ maxWidth: "85%" }} />
          {/* <p>{t("information-realm-p1")}</p>
          <p>{t("information-realm-p2")}</p>
          <p>{t("information-realm-p3")}</p>
          <p>{t("information-realm-p4")}</p> */}
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("magicMaybe")}</h2>
          {/* <p>{t("hook-model-p")}</p> */}
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
            <div
              className="scroll-down-cta-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a href="/focus-mode">
                <p style={{ width: "80%" }}>{t("focusMode")}</p>
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column" style={{}}>
          <h2>{t("one-sec-h2")}</h2>
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
            <div
              className="scroll-down-cta-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a href="https://one-sec.app" target="_blank">
                <p style={{ width: "70%" }}>{t("oneSec")}</p>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* <Footer /> */}
    </div>
  );
}
