import { useState } from "react";
import { useTranslation } from "react-i18next";
import DigitalMirrorPortal from "../components/3D-Storytelling/DigitalMirrorPortal";
import "../components/styles/DigitalReflection.css";
import "../components/styles/global.css";

export default function DigitalReflection() {
  const { t } = useTranslation();

  const [questions] = useState([
    t("question1"),
    t("question2"),
    t("question3"),
    t("question4"),
    t("question5"),
    t("question6"),
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(t("question1"));

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
  };

  const [showOptions, setShowOptions] = useState(false);
  
  const handleShare = (method) => {
      const introText = 'Check out this interesting question from the website "Protect me from what I want":';
      const imageUrl = 'http://localhost:5173/src/assets/logo2.png'; 
      const shareUrl = window.location.href;
      const fullMessage = `${introText}\n\n${imageUrl}\n\n${currentQuestion}\n\n${shareUrl}`;

      switch (method) {
        case 'whatsapp':
          window.open(`whatsapp://send?text=${encodeURIComponent(fullMessage)}`);
          break;
        case 'email':
          window.location.href = `mailto:?subject=Check%20out%20this%20question&body=${encodeURIComponent(fullMessage)}`;
          break;
        default:
          navigator.share({ title: 'Question', text: currentQuestion, url: shareUrl });
          break;
      }
  };
  

  return (
    <div>
      <div className="scroll-container" dir="ltr">
        <div className="hero-section">
          <div className="hero-section-headline">
            <h2>{t("digitalReflectionH1")}</h2>
          </div>
          <div className="hero-section-visual">
            <DigitalMirrorPortal />
          </div>
          <div className="hero-section-content">
            <p>{t("digitalReflectionP1")}</p>
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
            <div style={{width: "250px;"}} className="scroll-down-cta-text">
              <p>{t("digitalReflectionP2")}</p>
            </div>
          </div>
        </div>

        <div className="section-2" style={{justifyContent: "start", paddingTop: "290px"}}>
          <div className="question-section">
            <h2>{currentQuestion}</h2>
          </div>
          <div className="cta-section">
            <div className="button" onClick={getRandomQuestion}>
              Shuffle
            </div>
            <div className={`button ${showOptions ? 'different' : ''}`} onClick={() => setShowOptions(!showOptions)}>
              <svg className={`${showOptions ? 'hide' : 'show'}`}
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
              {showOptions && (
              <div className={`text ${showOptions ? 'show fade-in' : 'hide fade-out'}`}>
                <div onClick={() => handleShare('link')} style={{letterSpacing: "2.4px;"}}>Share Link</div>
                <div onClick={() => handleShare('whatsapp')} style={{letterSpacing: "2.4px;"}}>Share via WhatsApp</div>
                <div onClick={() => handleShare('email')} style={{letterSpacing: "2.4px;"}}>Share via Email</div>
              </div>
            )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
