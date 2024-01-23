import "../components/styles/MediaCompetence.css";

export default function MediaCompetence() {
  return (
    <div>
      <div className="" dir="ltr">
        <div className="sec-1">
          <h1 className="h2-pxgrotesk">
            Let’s get on that journey of improvement
          </h1>
        </div>
        <div className="cta-sec">
          <div className="button-outline active-button">
            <div className="button-outline-text">Longterm tips</div>
          </div>
          <div className="button-outline">
            <div className="button-outline-text">Shortterm tips</div>
          </div>
        </div>
        <div className="tab-sec">
          <div className="button-underline active-underline-button">
            <div className="button-underline-text">Methoden</div>
          </div>
          <div className="button-underline">
            <div className="button-underline-text">Bücher</div>
          </div>
          <div className="button-underline">
            <div className="button-underline-text">Podcasts</div>
          </div>
          <div className="button-underline">
            <div className="button-underline-text">Theorien</div>
          </div>
        </div>
      </div>
    </div>
  );
}
