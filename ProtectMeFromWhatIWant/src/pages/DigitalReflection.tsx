import { useState } from "react";
import "../components/styles/DigitalReflection.css";
import { useLanguage } from "../language/LanguageContext";

import { LanguageProvider } from "../language/LanguageContext";

export default function DigitalReflection() {
  const { translations } = useLanguage();

  const [questions] = useState([
    "Welche digitalen Gewohnheiten möchtest du beibehalten, weil sie positive Auswirkungen auf dein Leben haben?",
    "Wie fühlst du dich nach einer Stunde ununterbrochener Bildschirmzeit im Vergleich zu einer Stunde ohne digitale Ablenkungen?",
    "Welche positiven Veränderungen hast du in deinem Leben bemerkt, seit du versuchst, deine Bildschirmzeit zu reduzieren?",
    "Welche Aktivitäten oder Hobbys hast du wiederentdeckt oder intensiver erlebt, seit du bewusster mit deiner Online-Zeit umgehst?",
    "Wie gehst du mit digitalen Ablenkungen um, wenn du versuchst, dich auf eine bestimmte Aufgabe zu konzentrieren?",
    "Hast du festgestellt, dass du produktiver oder weniger gestresst bist, wenn du bewusster mit deiner Online-Zeit umgehst?",
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(
    "Welche digitalen Gewohnheiten möchtest du beibehalten, weil sie positive Auswirkungen auf dein Leben haben?"
  );

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
  };

  return (
    <LanguageProvider>
      <div>
        <div className="scroll-container" dir="ltr">
          <div className="section-1">
            <h1 className="h2-pxgrotesk">
              {translations["digitalReflectionH1"]}
            </h1>
            <div className="digital-content">
              {translations["digitalReflectionP1"]}
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
              <div className="digital-content">Never stop questioning</div>
            </div>
          </div>

          <div className="section-2">
            <div className="question-section">
              <div className="question">{currentQuestion}</div>
            </div>
            <div className="cta-section">
              <div className="button-outline" onClick={getRandomQuestion}>
                <div className="button-outline-text">shuffle</div>
              </div>
              <div className="button-outline">
                <div className="button-outline-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M17 1C17 0.447715 16.5523 -2.52353e-10 16 -2.53133e-07L7 5.47657e-07C6.44772 2.10482e-07 6 0.447716 6 1C6 1.55228 6.44772 2 7 2L15 2L15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10L17 1ZM1.70711 16.7071L16.7071 1.70711L15.2929 0.292893L0.292893 15.2929L1.70711 16.7071Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
