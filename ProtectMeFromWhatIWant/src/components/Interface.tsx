import { useTranslation } from "react-i18next";
import "./styles/Interface.css";
import "./styles/gloabl.css";

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
    <div className="container-section">
      <Section>
        <h1 className="h1-pxgrotesk"></h1>
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
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("hook-model-h2")}</h2>
          <p>{t("hook-model-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("one-sec-h2")}</h2>
        </div>
      </Section>
    </div>
  );
}
