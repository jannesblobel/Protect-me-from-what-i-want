import "../components/styles/DigitalReflection.css";
import { useState } from 'react';

export default function DigitalReflection() {

  const [questions] = useState([
    'Welche digitalen Gewohnheiten möchtest du beibehalten, weil sie positive Auswirkungen auf dein Leben haben?',
    'Wie fühlst du dich nach einer Stunde ununterbrochener Bildschirmzeit im Vergleich zu einer Stunde ohne digitale Ablenkungen?',
    'Welche positiven Veränderungen hast du in deinem Leben bemerkt, seit du versuchst, deine Bildschirmzeit zu reduzieren?',
    'Welche Aktivitäten oder Hobbys hast du wiederentdeckt oder intensiver erlebt, seit du bewusster mit deiner Online-Zeit umgehst?',
    'Wie gehst du mit digitalen Ablenkungen um, wenn du versuchst, dich auf eine bestimmte Aufgabe zu konzentrieren?',
    'Hast du festgestellt, dass du produktiver oder weniger gestresst bist, wenn du bewusster mit deiner Online-Zeit umgehst?',
  ]);

  const [currentQuestion, setCurrentQuestion] = useState('Welche digitalen Gewohnheiten möchtest du beibehalten, weil sie positive Auswirkungen auf dein Leben haben?');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
  };

  return (
    <div>
      <div className="scroll-container" dir="ltr">
        <div className="section-1">
          <h1 className="h2-pxgrotesk">Step into the Digital Detox Reflection Zone</h1>
          <div className="content">
          A space where we navigate the art of conscious living in a digital world. Join us on this mindful journey as we unplug and reflect on the tapestry of our digital experiences. It's a movement to amidst the noise of screen time, sharing insights and creating a collective atmosphere of mindful connection and balance. 
          Take a pause, reflect, and let's flow with the positive energy.
          <br/><br/>
          <b>Never stop questioning!</b>
          </div>
          {/* <img src="../assets/digitalreflection.png" className="image" /> */}
        </div>

        <div className="section-2">
          <div className="question-section">
            <div className="question">
              {currentQuestion}
            </div>
          </div>
          <div className="cta-section">
            <div className="button-outline" onClick={getRandomQuestion}>
              <div className="button-outline-text">
                shuffle
              </div>
            </div>
            <div className="button-outline">
              <div className="button-outline-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M17 1C17 0.447715 16.5523 -2.52353e-10 16 -2.53133e-07L7 5.47657e-07C6.44772 2.10482e-07 6 0.447716 6 1C6 1.55228 6.44772 2 7 2L15 2L15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10L17 1ZM1.70711 16.7071L16.7071 1.70711L15.2929 0.292893L0.292893 15.2929L1.70711 16.7071Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
