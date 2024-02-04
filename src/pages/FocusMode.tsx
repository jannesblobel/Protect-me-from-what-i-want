import focusMode1 from "@/assets/focusModeGIF1.gif";
import { motion } from "framer-motion";
import "../components/styles/FocusMode.css";
import "../components/styles/global.scss";
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import focusMode from "@/assets/focusMode.gif";
import focusMode2 from "@/assets/focusModeGIF2.gif";

export default function FocusMode() {
  return (
    <>
      <motion.div className="hero-container">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>Fokus Modus</h3>
        </aside>
        <div className="hero-header">
          <h1>Fokus-Modus für ungestörte Kontrolle</h1>
        </div>
        <div className="hero-text">
          <p>
            Dein persönliches Werkzeug für ungestörte Produktivität und
            wohltuende Auszeiten auf dem iPhone! Egal, ob du konzentriert
            arbeiten, dich entspannen oder einfach den digitalen Trubel
            ausblenden möchtest – der Fokus-Modus bietet dir die Kontrolle. Hier
            erfährst du, wie du ihn direkt im Kontrollzentrum aktivierst oder
            clever planst, damit er sich automatisch zu den Zeiten einschaltet,
            die für dich am besten passen.
          </p>
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
              stroke-width="2"
            />
          </svg>
          <div className="scroll-down-cta-text">
            <p>Im Handumdrehen eingerichtet</p>
          </div>
        </div>
        <div className="hero-visual">
          <img style={{ maxHeight: "80%" }} src={focusMode} />
        </div>
      </motion.div>
      <motion.div className="container">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>Schritt 1</h3>
        </aside>
        <div className="hero-header">
          <h1>Bestehenden Fokus Modus aktivieren</h1>
        </div>
        <div className="hero-text">
          <p>
            1 -{" "}
            <a
              className="link"
              href="https://support.apple.com/de-de/guide/iphone/aside/iph7c412b4db/17.0/ios/17.0"
              target="_blank"
            >
              Öffne das Kontrollzentrum
            </a>
            , tippe auf „Fokus“ und anschließend auf den Fokus, der aktiviert
            werden soll (beispielsweise „Nicht stören“).
            <br />
            <br />
            Hinweis: Ist bereits ein anderer Fokus aktiv, wird dieser
            deaktiviert, wenn du auf den neuen Fokus tippst.
          </p>
        </div>
        <div className="hero-visual-img">
          <img style={{ maxHeight: "80%" }} src={focusMode1} />
        </div>
      </motion.div>
      <motion.div className="container">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>Schritt 2</h3>
        </aside>
        <div className="hero-header">
          <h1>Neuen Fokus Modus erstellen</h1>
        </div>
        <div className="hero-text">
          <p>
            Wenn du dich auf eine Aktivität konzentrieren möchtest, die keiner
            der bereitgestellten Fokus-Optionen entspricht, kannst du einen
            eigenen Fokus erstellen. <br />
            <br />
            <br />
            <br />
            1 - Wähle „Einstellungen“ & dann „Fokus“.
            <br />
            <br />
            2 - Tippe auf die Taste „Hinzufügen“ oben rechts und anschließend
            auf „Eigener“.
            <br />
            <br />
            3 - Gib einen Namen für deinen Fokus ein und tippe auf den
            Zeilenschalter.
            <br />
            <br />
            4 - Wähle eine Farbe und ein passendes Symbol aus und tippe auf
            „Weiter“.
            <br />
            <br />5 - Tippe auf „Fokus anpassen“ und lege die Optionen für
            deinen eigenen Fokus fest.
          </p>
        </div>
        <div className="hero-visual-img">
          <img style={{ maxHeight: "80%" }} src={focusMode2} />
        </div>
      </motion.div>
    </>
  );
}
