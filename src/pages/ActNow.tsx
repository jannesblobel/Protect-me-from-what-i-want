import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../components/styles/ActNow.css";
import "../components/styles/global.scss";

import focusMode from "@/assets/focusMode.gif";
import LegoBricks from "../components/3D-Storytelling/LegoBricks";
// import forestApp from "@/assets/forestAppPreview.png";
// import gehirnGehoert from "@/assets/gehirnGehoert.png";
import Prozent from "@/assets/Prozent.gif";
import kreativität from "@/assets/kreativitaet.gif";
import nixxen from "@/assets/nixxen.gif";
import OneSec from "@/assets/oneSec.gif";

import InnehaltenBlack from "@/assets/InnehaltenBlack.gif";
import appLimitsGIF from "@/assets/appLimits.gif";
import arrow from "@/assets/arrowStraight.svg";
import grauStufenGIF from "@/assets/grauStufen.gif";
import handyFrei from "@/assets/handyFrei.gif";

import { motion } from "framer-motion";
import animation from "../components/animations/divAnim";

export default function ActNow() {
  const { t } = useTranslation();
  const [selectedTip, setSelectedTip] = useState("shortterm");
  //   const [selectedTab, setSelectedTab] = useState("apps");

  const handleTipButtonClick = (tipType: "longterm" | "shortterm") => {
    setSelectedTip(tipType);
    // setSelectedTab(tipType === "shortterm" ? "apps" : "pauses");
  };

  //   const handleTabButtonClick = (
  //     tabType:
  //       | "apps"
  //       | "books"
  //       | "podcasts"
  //       | "theories"
  //       | "pauses"
  //       | "mindfulness"
  //       | "stimuli"
  //   ) => {
  //     setSelectedTab(tabType);
  //   };

  const [currentCard, setCurrentCard] = useState(1); // Initialisiere mit der ersten Karte
  const [currentCard2, setCurrentCard2] = useState(1); // Initialisiere mit der ersten Karte
  const [isShaking, setIsShaking] = useState(false);

  const handleArrowClick = (direction) => {
    // Überprüfe, ob die nächste Karte existiert
    if (direction === "next" && currentCard < totalCards) {
      setCurrentCard((currentCard + 1) % totalCards);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    } else if (direction === "prev" && currentCard > 0) {
      setCurrentCard((currentCard - 1) % totalCards);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  };

  const handleArrowClick2 = (direction) => {
    // Überprüfe, ob die nächste Karte existiert
    if (direction === "next" && currentCard2 < totalCards2) {
      setCurrentCard2((currentCard2 + 1) % totalCards2);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    } else if (direction === "prev" && currentCard2 > 0) {
      setCurrentCard2((currentCard2 - 1) % totalCards2);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  };

  const totalCards = 4; // Anzahl der Karten insgesamt
  const totalCards2 = 5; // Anzahl der Karten insgesamt

  const cards = [
    {
      title: "Stelle dein Handy auf Graustufen",
      content:
        "Dein Handy besitzt die Funktion, den Bildschirm nur noch in Graustufen darzustellen. Dadurch wird die Benutzung auf Dauer anstrengend für die Augen und somit unattraktiver. Ein gutes Mittel also, um die Handysucht zu bekämpfen.",
      content2:
        "iPhone: Einstellungen → Allgemein → Bedienungshilfen → Display-Anpassungen → Farbfilter einschalten.",
      gif: grauStufenGIF,
    },
    {
      title: "Limits für die App-Nutzung festlegen",
      content:
        "Du kannst ein Zeitlimit für eine Kategorie von Apps (z. B: „Spiele“ oder „Soziale Netzwerke“) und für einzelne Apps festlegen.",
      content2:
        "Wähle „Einstellungen“ → „Bildschirmzeit“. Tippe auf → „App-Limits“ und danach auf → „App-Limit“. Wähle eine oder mehrere Apps oder App-Kategorien aus. Tippe oben rechts auf → „Weiter“ und lege die erlaubte Zeitspanne fest. Wenn du mit dem Festlegen von Limits fertig bist, tippst du auf → „Hinzufügen“.",
      gif: appLimitsGIF,
    },
    {
      title: "OneSec herunterladen",
      content:
        "Jedes Mal, wenn du versuchst, deine Lieblingsapp zu öffnen, warte. Atme tief ein und langsam wieder aus. Eine Sekunde gibt dir die Möglichkeit, innezuhalten und zweimal nachzudenken - bevor du in ein endloses Schlupfloch gesogen werden, das dich wieder stundenlang in den Bann zieht.",
      gif: OneSec,
    },
    {
      title: "1% Methode",
      content:
        "Indem wir täglich nur 1% unserer Bildschirmzeit für bewusste Pausen oder produktive Aktivitäten reservieren, können wir langfristig unsere digitale Medienroutine verbessern. Dies könnte bedeuten, dass wir uns 1% der Zeit für informative Podcasts oder Bücher statt endloses Scrollen auf Social Media widmen. Kleine digitale Anpassungen können zu einer nachhaltigeren und bewussteren Nutzung führen.",
      gif: Prozent,
    },
    // ...
  ];

  const cards2 = [
    {
      title: "Digitale Pausen - Nixxen",
      content:
        'Obwohl digitale Ablenkungen wie lustige Videos oder Telefonate für kurzzeitige Entspannung sorgen können, empfehlen Neurowissenschaftler eine tiefere Form der Erholung. Inmitten des digitalen Trubels ist bewusstes "Nixen" ein Weg zur mentalen Entspannung. Ohne Bildschirm, ohne Ablenkungen – einfach die Gedanken treiben lassen. Ein einfacher, aber effektiver Schlüssel zur inneren Ruhe.',
      content2: "",
      gif: nixxen,
    },
    {
      title: "Innehalten im Alltag",
      content:
        "Im hektischen Alltag hilft bewusstes Innehalten, Stressfaktoren zu erkennen und effektive Lösungsansätze zu finden. Medienkonsum in freien Momenten kann diese wichtige Reflexionszeit beeinträchtigen. Eine Studie zeigt, dass viele lieber zum Smartphone greifen, anstatt sich mit ihren Gedanken auseinanderzusetzen. Zeit für bewusstes Innehalten kann transformative Wirkung haben.",
      content2: "",
      gif: handyFrei,
    },
    {
      title: "Innehalten am Morgen",
      content:
        "Nimm dir morgens bewusst 10 Minuten ohne Handy, bevor du in den digitalen Trubel startest. Nutze diese Zeit, um deine Prioritäten für den Tag zu setzen, statt direkt in den Strudel der Nachrichten und Social-Media-Updates gezogen zu werden. Ein klarer Start kann dir helfen, den Tag fokussierter und stressfreier anzugehen.",
      gif: InnehaltenBlack,
    },
    {
      title: "Handyfreie Zonen",
      content:
        "Erschaffe Räume in deinem Zuhause, in denen das Handy Pause macht. Diese handyfreien Zonen fördern bewusste Auszeiten, stärken echte Verbindungen und schenken dir kostbare Momente der Achtsamkeit.",
      content2:
        "Das könnte zum Beispiel dein Bett, gesamtes Schlafzimmer oder dein Sessel sein.",
      gif: handyFrei,
    },
    {
      title: "Kreativität",
      content:
        "Richte deinen Fokus nicht auf Dinge innerhalb deines Smartphones, sondern auf dein offline Leben. Welche hobbys bringen dir Freude und Eefüllung? Entdecke dein Kreativität wider, um dich so von deinem Smartphone zu lösen. Schaue nicht anderen durch einen Bildschirm beim leben zu, sondern kreie dein eigenes Leben.",
      content2:
        "→ Hol dir unsere App, für Inspiration und kreative Anstöße im Alltag",
      gif: kreativität,
    },
  ];

  return (
    <div>
      <div className="scroll-container" dir="ltr">
        <motion.div className="hero-section" {...animation}>
          <h2>{t("actNowH2")}</h2>
          <div className="hero-section-three">
            <LegoBricks />
          </div>
          <div className="hero-section-content">
            <p>{t("actNowP1")}</p>
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
            <div style={{ width: "40%" }} className="scroll-down-cta-text">
              <p>{t("actNowP2")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="section-3-actNow">
          <div className="hero-section" style={{ gap: "200px" }}>
            <div className="hero-section-headline">
              <h2 style={{ color: "#B3A1FF" }}>
                Entdecke die App OneSec für bewusste Pausen während deiner Appbenutzung
              </h2>
              <br />
              <p className="text" style={{ width: "100%" }}>
                One Sec enhances awareness and intentional usage by introducing a 10-second delay/friction, disrupting the instant gratification associated with social media apps.
              </p>
              <br />
              <br />
              <br />
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
                    stroke-width="2"
                  />
                </svg>
                <a href="/focus-mode" style={{ cursor: "pointer" }}>
                  <div className="scroll-down-cta-text">
                    <p>Im Handumdrehen einrichten</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="hero-section-visual"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gridRow: "1 / span 1",
                gridColumn: "2 / span 1",
              }}
            >
              <img width="300px;" src={OneSec} />
            </div>
          </div>
        </motion.div>

        <motion.div className="section-3-actNow" {...animation}>
          <div className="hero-section" style={{ gap: "200px" }}>
            <div className="hero-section-headline">
              <h2 style={{ color: "#B3A1FF" }}>
                Entdecke den Fokus Modus für ungestörte Produktivität und
                Kontrolle
              </h2>
              <br />
              <p className="text" style={{ width: "100%" }}>
                Dein persönliches Werkzeug für ungestörte Produktivität und
                wohltuende Auszeiten auf dem iPhone! Egal, ob du konzentriert
                arbeiten, dich entspannen oder einfach den digitalen Trubel
                ausblenden möchtest – der Fokus-Modus bietet dir die Kontrolle.
                Hier erfährst du, wie du ihn direkt im Kontrollzentrum
                aktivierst oder clever planst, damit er sich automatisch zu den
                Zeiten einschaltet, die für dich am besten passen.
              </p>
              <br />
              <br />
              <br />
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
                <a href="/focus-mode" style={{ cursor: "pointer" }}>
                  <div className="scroll-down-cta-text">
                    <p>Im Handumdrehen einrichten</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="hero-section-visual"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gridRow: "1 / span 1",
                gridColumn: "2 / span 1",
              }}
            >
              <img width="300px;" src={focusMode} />
            </div>
          </div>
        </motion.div>

        <motion.div className="section-3-actNow" {...animation}>
          <div className="cta-sec">
            <div
              className={`button ${
                selectedTip === "shortterm" ? "active-button" : ""
              }`}
              onClick={() => handleTipButtonClick("shortterm")}
            >
              {t("shorttermTips")}
            </div>
            <div
              className={`button ${
                selectedTip === "longterm" ? "active-button" : ""
              }`}
              onClick={() => handleTipButtonClick("longterm")}
            >
              {t("longtermTips")}
            </div>
          </div>

          {/* Shortterm */}
          {selectedTip === "shortterm" && (
            <div className="card-rotation-section">
              <div className="button" onClick={() => handleArrowClick("prev")}>
                <img src={arrow} className="arrow-white left" />
              </div>
              <div className={`card-component ${isShaking ? "shake" : ""}`}>
                <div className="column-view">
                  <div className="text-block">
                    <h2 className="black">{cards[currentCard].title}</h2>
                    <br />
                    <div className="text black">
                      {cards[currentCard].content}
                    </div>
                    <br />
                    <div className="text black">
                      {cards[currentCard].content2}
                    </div>
                  </div>
                  <img src={cards[currentCard].gif} className="gif-style" />
                </div>
              </div>
              <div className="button" onClick={() => handleArrowClick("next")}>
                <img src={arrow} className="arrow-white" />
              </div>
            </div>
          )}

          {/* Longterm */}
          {selectedTip === "longterm" && (
            <div className="card-rotation-section">
              <div className="button" onClick={() => handleArrowClick2("prev")}>
                <img src={arrow} className="arrow-white left" />
              </div>
              <div className={`card-component ${isShaking ? "shake" : ""}`}>
                <div className="column-view">
                  <div className="text-block">
                    <h2 className="black">{cards2[currentCard2].title}</h2>
                    <br />
                    <div className="text black">
                      {cards2[currentCard2].content}
                    </div>
                    <br />
                    <div className="text black">
                      {cards2[currentCard2].content2}
                    </div>
                  </div>
                  <img src={cards2[currentCard2].gif} className="gif-style" />
                </div>
              </div>
              <div className="button" onClick={() => handleArrowClick2("next")}>
                <img src={arrow} className="arrow-white" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
