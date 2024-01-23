import "../components/styles/ActNow.css";
import { useState } from 'react';
// import doodle from "../assets/doodle.png";

export default function ActNow() {
    const [selectedTip, setSelectedTip] = useState('shortterm'); 

    const handleTipButtonClick = (tipType: 'longterm' | 'shortterm') => {
        setSelectedTip(tipType);
    };

    return (
        <div>
            <div className="scroll-container" dir="ltr">
                <div className="section-1">
                    <h1 className="h2-pxgrotesk">Let’s get on that journey of improvement</h1>
                    <div className="digital-content">
                        Entdecke Methoden, Gedankenmodelle, die dich nicht nur im Hier und Jetzt unterstützen, sondern auch langfristig deine Beziehung zu digitalen Medien verbessern.
                    </div>
                    <div className="learn-more-cta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                        <path d="M1 0.999998L50 49M50 49H8M50 49V5.8" stroke="#E7E7E7" stroke-width="2"/>
                        </svg>
                        <div className="digital-content">
                        Improve your relationship with digital media                
                        </div>
                    </div>
                </div>
                <div className="section-2-actNow">
                    <div className="cta-sec">
                        <div className={`button-outline ${selectedTip === 'shortterm' ? 'active-button' : ''}`}>
                            <div className="button-outline-text" onClick={() => handleTipButtonClick('shortterm')}>
                                Shortterm tips
                            </div>
                        </div>
                        <div className={`button-outline ${selectedTip === 'longterm' ? 'active-button' : ''}`}>
                            <div className="button-outline-text" onClick={() => handleTipButtonClick('longterm')}> 
                                Longterm tips
                            </div>
                        </div>
                    </div>
                    {selectedTip === 'shortterm' && (
                        <div className="tab-sec">
                            <div className="button-underline active-underline-button">
                                <div className="button-underline-text">
                                    Apps
                                </div>
                            </div>
                            <div className="button-underline">
                                <div className="button-underline-text">
                                    Bücher
                                </div>
                            </div>
                            <div className="button-underline">
                                <div className="button-underline-text">
                                    Podcasts
                                </div>
                            </div>
                            <div className="button-underline">
                                <div className="button-underline-text">
                                    Theorien
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedTip === 'longterm' && (
                        <div className="tab-sec">
                            <div className="button-underline active-underline-button">
                                <div className="button-underline-text">
                                    Pausen
                                </div>
                            </div>
                            <div className="button-underline">
                                <div className="button-underline-text">
                                    Achtsamkeit
                                </div>
                            </div>
                            <div className="button-underline">
                                <div className="button-underline-text">
                                    Störreize
                                </div>
                            </div>
                        </div>
                    )}
                
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Innehalten</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Innehalten</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Innehalten</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
