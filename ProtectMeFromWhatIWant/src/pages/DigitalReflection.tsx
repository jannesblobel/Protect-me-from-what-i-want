import "../components/styles/DigitalReflection.css";

export default function DigitalReflection() {
  return (
    <div>
      <div className="y mandatory-scroll-snapping" dir="ltr">
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
          <div className="question-shuffle-section">
            <svg className="svg-position" xmlns="http://www.w3.org/2000/svg" width="1440" height="748" viewBox="0 0 1440 748" fill="none">
              <g filter="url(#filter0_f_485_4404)">
              <path className="background-blur" d="M770.51 232.38C701.54 245.187 715.334 242.858 404.436 219.573C341.479 202.886 208.985 189.303 182.67 268.472C149.777 367.433 149.777 313.296 182.67 459.991C215.564 606.687 495.69 576.417 512.667 576.417C529.644 576.417 722.496 527.59 770.51 447.256C799.532 398.699 1054.88 478.037 1182.21 404.689C1309.54 331.341 1279.83 315.042 1273.46 257.411C1267.1 199.781 1090.96 164.271 976.36 169.51C861.763 174.749 839.48 219.573 770.51 232.38Z" fill="#7520FF"/>
              </g>
              <defs>
              <filter id="filter0_f_485_4404" x="-10.1" y="0.899994" width="1459.2" height="746.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="84.05" result="effect1_foregroundBlur_485_4404"/>
              </filter>
              </defs>
            </svg>
          </div>
          <div className="question-section">
            <div className="question">
              Welche digitalen Gewohnheiten möchtest du beibehalten, weil sie positive Auswirkungen auf dein Leben haben?
            </div>
          </div>
          <div className="cta-section">
            <div className="button-outline">
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
