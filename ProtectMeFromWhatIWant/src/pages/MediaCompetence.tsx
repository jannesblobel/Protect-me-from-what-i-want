import { useState } from "react";
import spotlight from "../assets/spotlight.png";
import spotlightMinimal from "../assets/spotlightMinimal.png";
import SpotLightScene from "../components/SpotLightScene";
import "../components/styles/MediaCompetence.css";
import { useTranslation } from 'react-i18next';

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
        <div className="section-1">
          <h1 className="h2-pxgrotesk">
            {t('mediaCompetenceH1')}
          </h1>
          <div className="digital-content">
            {t('mediaCompetenceContent1')}
            <br />
            <br />
            {t('mediaCompetenceContent2')}
          </div>
          <div className="learn-more-cta">
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
            <div className="digital-content">{t('cta1')}</div>
          </div>
        </div>
        <div className="section-2-center">
          <div className="quote">
            <div className="quote-text">
              "Die Steuerung der Aufmerksamkeit ist daher eine der wertvollsten
              geistigen Fähigkeiten, die Sie entwickeln, pflegen und trainieren
              können"
            </div>
            <div className="quote-author">- Volker Busch</div>
          </div>
          <div className="column-section">
            <div className="column-title">Aufmerksamkeit</div>
            <div className="column-title">Selbstmanagement</div>
            <div className="column">
              To direct attention to something means to take mental possession
              of it, be it our own perception, our thoughts, feelings or
              actions. Attention is a form of inward and outward mental
              engagement that allows us to sift through the multitude of
              information, analyze it or organize our thoughts and feelings.
              Controlling our attention is crucial to becoming media literate.
              In a world dominated by information overload and distractions, we
              often forget how to direct our own attention. The ability to
              direct attention is invaluable and should be developed, nurtured
              and practiced. Self-regulation can help to reduce everyday stress
              in a world full of stimuli. However, this is a process that
              requires mature judgment.
            </div>
            <div className="column">
              Attention is a valuable resource in modern capitalist society. We
              "pay" for services and offers with our attention, and in return we
              receive information. However, this attention resource is limited.
              Although we can divide it up and switch it around, there is an
              upper limit. Because of this limit, attention has a high value. In
              order to hold our attention for as long as possible, strategies
              become louder and more extreme in order to gain at least a few
              seconds of our limited attention. As a result, our brains become
              more susceptible to disruptions caused by technology and
              information overload, known as "technoference". Effective
              self-management is of great importance in order to withstand this
              hectic world and manage attention in a self-determined way.{" "}
            </div>
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
          <div className="highlight-block">Medienmündigkeit</div>
        </div>
        <div className="section-3">
          <div className="content-block">
            <div className="column-title">Spotlight</div>
            <div className="digital-content">
              Das Zusammenspiel zwischen Aufmerksamkeit und Selbstregulierung
              kann wie das Funktionieren eines Scheinwerfers verstanden werden.
              Die Aufmerksamkeit entspricht dem Lichtkegel des Scheinwerfers.
              Sie ermöglicht es, Personen oder Objekte auszuwählen, indem sie
              aus der Fülle von Informationen das auswählt, was gerade
              interessant oder relevant erscheint (Selektion). Der Scheinwerfer
              kann auch seinen Lichtkegel um 180° auf die inneren Prozesse
              richten.
            </div>
          </div>
          <div className="spotlight-section">
            <div className="column-block">
              <img width={"250px"} src={spotlight} />
              <div className="digital-content-2">
                Der Mehrwert aus den gewonnenen Informationen entsteht durch
                kreatives Verknüpfen mit bestehenden Inhalten, Erfahrungen und
                Gefühlen. Kreativität eröffnet Lösungsmöglichkeiten und schafft
                Raum für neue I
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
                Konzentration
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
                Kreativität
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
                Klarheit
              </div>
            </div>
          </div>
          {selectedButton === "konzentration" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <div className="column-title">Konzentration</div>
                <div className="digital-content">
                  Der Fokus, also die Konzentration ist ein vorübergehender
                  geistiger Zustand und die Basis dafür, dass man kritisch
                  reflektieren, logisch denken und Gedankengängen folgen kann.
                  Stell dir deine Konzentration wie einen Lichtkegel vor: Je
                  präziser und intensiver dieser Lichtkegel ist, desto tiefer
                  kannst du geistig in einen Gedanken eindringen. Wenn man sich
                  voll und ganz auf eine Aufgabe einlässt, steigt die
                  Verarbeitungstiefe, was zu einer besseren Speicherung von
                  Informationen führt. Konzentrierte Aufmerksamkeit ist
                  entscheidend für präzises Denken und Handeln in nahezu allen
                  Lebensbereichen. Konzentration funktioniert, wenn ein gutes
                  Selbstmanagement Störreize reduziert und den Lichtkegel der
                  Aufmerksamkeit intensiv und eng erleuchten lässt. Die
                  Leistungssteigerung durch aufmerksame Konzentration entsteht
                  durch die Synchronisierung der neurologischen
                  Hirnstromfrequenzen in verschiedenen Hirnarealen auf ein
                  einheitliches Maß oder dieselbe Wellenlänge. Wenn diese
                  Frequenzbereiche auf eine gemeinsame Wellenlänge kommen, wird
                  vermehrt der Neurotransmitter Acetylcholin freigesetzt. Dies
                  fördert die Kommunikation und den Informationsaustausch
                  zwischen den Nervenbahnen. Während wir konzentriert sind oder
                  in eine tiefere Denkphase während einer Aufgabe eintauchen,
                  steigert dies unsere Fähigkeiten in Bereichen wie logischem
                  Denken, Abstraktionsvermögen und Gedächtnis
                </div>
              </div>
              <img width={"500px"} src={spotlightMinimal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
