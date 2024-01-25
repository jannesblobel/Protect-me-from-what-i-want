import "../../components/styles/gloabl.css";
import "../../components/styles/FocusMode.css";
import focusMode1 from "../../assets/focusMode1.png";
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import focusMode from "../../assets/focusMode.gif";

export default function FocusMode() {
    return (
        <div>
            <div className="scroll-container" dir="ltr">
                <div className="hero-section">
                    <h1 style={{"color": "#B3A1FF"}}>Fokus Modus</h1>
                    <div className="hero-section-column">
                        <div className="hero-section-column-gap">
                            <h2>Der Fokus-Modus für ungestörte Produktivität und Kontrolle</h2>
                            <text style={{"width": "90%"}}>Dein persönliches Werkzeug für ungestörte Produktivität und wohltuende Auszeiten auf dem iPhone! Egal, ob du konzentriert arbeiten, dich entspannen oder einfach den digitalen Trubel ausblenden möchtest – der Fokus-Modus bietet dir die Kontrolle. Hier erfährst du, wie du ihn direkt im Kontrollzentrum aktivierst oder clever planst, damit er sich automatisch zu den Zeiten einschaltet, die für dich am besten passen.</text>
                        </div>
                        <img width="300px;" src={focusMode}/>
                    </div>
                    <div className="scroll-down-cta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                        <path d="M1 0.999998L50 49M50 49H8M50 49V5.8" stroke="#E7E7E7" stroke-width="2"/>
                        </svg>
                        <div className="scroll-down-cta-text">
                        <p>Im Handumdrehen eingerichtet</p>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="column-block-subpage">
                        <div className="content-block-subpage">
                            <h2 style={{"color": "#B3A1FF"}}>Step by Step</h2>
                            <h3>1 - Bestehenden Fokus Modus aktivieren</h3>
                            <text>
                                1 - <a className="link" href="https://support.apple.com/de-de/guide/iphone/aside/iph7c412b4db/17.0/ios/17.0" target="_blank">Öffne das Kontrollzentrum</a>, tippe auf „Fokus“ und anschließend auf den Fokus, der aktiviert werden soll (beispielsweise „Nicht stören“).
                                <br/><br/>
                                Hinweis: Ist bereits ein anderer Fokus aktiv, wird dieser deaktiviert, wenn du auf den neuen Fokus tippst.
                            </text>
                        </div>
                        <img width={"400px"} src={focusMode1} />
                    </div>
                </div>
            </div>
        </div>
    );
}