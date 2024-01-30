import { useState } from "react";
import Spot from "../components/3D-Storytelling/Spot";
import SpotLightScene from "../components/SpotLightSceneNew";
import "../scss/MediaCompetenceRework.scss";

// Function to map one range of numbers to another range
const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function MediaCompetenceRework() {
  const [intensity, setIntensity] = useState(50);
  const [angle, setAngle] = useState(Math.PI / 8);
  const [penumbra, setPenumbra] = useState(0.1);
  const [distance, setDistance] = useState(7);

  return (
    <>
      <div className="container">
        <div className="left-col" style={{ gridRow: "4 / span 1" }}>
          <h3>Friction</h3>
        </div>
        <div className="hero-header">
          <h1>
            Medienmündig ist, wer Medien möglichst beherrscht und sich wenig von
            ihnen beherrschen lässt
          </h1>
          <p>
            Um Medienmündigkeit zu entwickeln, ist es wichtig, ein Bewusstsein
            für unsere Handlungen zu entwickeln, unsere innen- und
            außengerichtete Wahrnehmung zu schärfen und ein gutes
            Selbstmanagement zu entwickelnaufzubauen. Das erfordert Zeit, Geduld
            und gelegentlich ruhige Momente in einem Zeitalter der
            Beschleunigung.
          </p>
          <p>
            Die in der Landingpage erzeugte friction vor trigger und action sind
            ein guter Anfang zur gesunden Digital-analog-Balance. OneSec und der
            Fokus Modus verwenden Techniken aus medienmündigen Verhaltensweisen,
            um den Einstieg zur Medienmündigkeit leichter zu gestalten. Friction
            kann mit medienmündigen Verhalten selbst erzeugt + etabliert werden,
            sodass man von den vielen Vorteilen, der digitalen Welt profitiert.
          </p>
        </div>
        <div className="hero-visual">
          <Spot />
        </div>
      </div>
      <div className="container">
        <div className="left-col" style={{ gridRow: "span 4", height: "20vh" }}>
          <h3>Begriffserklärung</h3>
        </div>
        <div
          className="left-col"
          style={{ gridRow: "5 / span 1", height: "90vh" }}
        >
          <h3>Volker Busch, 2021</h3>
        </div>
        <div className="text-content">
          <h3>Aufmerksamkeit</h3>
          <p>
            Die Aufmerksamkeit auf etwas zu richten bedeutet, geistig Besitz
            einer Sache zu ergreifen: sei es die eigene Wahrnehmung, Gedanken,
            Gefühlen oder Handlungen. Aufmerksamkeit ist eine Form der geistigen
            Zuwendung nach innen und außen, um aus der Vielzahl an
            InformationenInteressantes zu selektieren und analysieren oder
            unsere Gedanken und Gefühle zu ordnen. Die Steuerung unserer
            Aufmerksamkeit ist entscheidend, um medienmündig zu werden. In einer
            von Informationen und Ablenkungen geprägten Welt ist die
            Aufmerksamkeitssteuerung von unschätzbarem Wert und sollte
            aufgebaut, gepflegt und trainiert werden. Autonomes Steuern kann
            dazu beitragen, alltägliche Belastungen in einer schnellen Welt zu
            reduzieren.
          </p>
        </div>
        <div className="text-content-2">
          <h3>Selbstwirksamkeit</h3>
          <p>
            Aufmerksamkeit ist in der modernen Gesellschaft eine kostbare
            Ressource. Wir erhalten Informationen durch Dienst-leistungen und
            Angebote, für die wir im Gegenzug mit unserer Aufmerksamkeit
            bezahlen. Diese Ressource ist jedoch begrenzt. Obwohl wir sie in
            Intervalle aufteilen und ihren Fokus wechseln können, gibt es eine
            Obergrenze.Um unsere Aufmerksamkeit möglichst lange halten zu
            können, werden die Strategien in ihrer Durchführung meist immer
            lauter und extremer, um zumindest ein paar Sekunden zu gewinnen. Das
            führt dazu, dass unser Gehirn anfälliger für Störungen wird. Diese
            durch Technologien und Informations-überflutung verursachten
            Störungen werden als "Technoferenz" bezeichnet. Um dieser hektischen
            Welt entgegen-zuhalten ist effektives Selbstmanagement von großer
            Bedeutung. Störungen und Ablenkungen lauern überall - aber im
            Gegensatz zu Emotionen wie Wut oder Angst können wir bei unserer
            Aufmerksamkeit selbst entscheiden, wohin wir sie lenken.
          </p>
        </div>
        <div className="text-quote">
          <span>
            “Aufmerksamkeit ist eines der kostbarsten Geschenke, die Sie sich
            selbst und anderen machen können. Es lohnt sich, diese wunderbare
            Eigenschaft zu verstehen und vielleicht sogar zu schätzen.”
          </span>
        </div>
      </div>
      <div className="container-long">
        <div className="left-col" style={{ gridRow: "1", top: "12vh" }}>
          <h3>Spotlight</h3>
          <p>
            Das Zusammenspiel zwischen Aufmerksamkeit und Selbstregulierung kann
            wie ein Scheinwerfer verstanden werden.
          </p>
        </div>
        <div className="spotlight-visual">
          <p>Darstellung Spotlight</p>
          <SpotLightScene
            intensity={intensity}
            angle={angle}
            distance={distance}
            penumbra={penumbra}
          />
        </div>
        <div
          style={{
            position: "sticky",
            top: "12vh",
            gridColumn: "9 / span 2",
            gridRow: "1/ span 1",
          }}
        >
          <p>Begriffe</p>
        </div>
        <div className="spotlight-controls" style={{ gridRow: "1" }}>
          <h3>Fokus</h3>
          <p>
            Unsere Aufmerksamkeit entspricht einem Lichtkegel. Sie ermöglicht
            es, Personen oder Objekte auszuwählen, indem sie aus der Fülle von
            Informationen das auswählt, was als interessant oder relevant
            erscheint (Selektion). Der Scheinwerfer kann seinen Lichtkegel aber
            auch um 180° und somit auf innere Prozesse richten.
          </p>
          <input
            type="range"
            min="0.10"
            max={Math.PI / 2 - 0.1}
            step="0.01"
            value={Math.PI / 2 - angle}
            onChange={(e) => {
              setAngle(Math.PI / 2 - Number(e.target.value));
              setIntensity(
                mapRange(
                  Number(e.target.value),
                  0.1,
                  Math.PI / 2 - 0.1,
                  30,
                  500
                )
              );
            }}
          />
        </div>
        <div className="spotlight-controls">
          <h3>Streulicht</h3>
          <p>
            Ein enges Streulicht um den Lichtkegel reduziert die
            Störanfälligkeit: ungewollte Störungen bleiben im abgedunkelten
            Bereich. Ein gutes Selbstmanagement verringert die Streuung der
            Aufmerksamkeit und schützt vor Störungen. Wenn sich solche Störreize
            in der Peripherie unseres Bewusstseins befinden, wendet sich ihnen
            die Aufmerksamkeit automatisch zu.
          </p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={penumbra}
            onChange={(e) => setPenumbra(Number(e.target.value))}
          />
        </div>

        <div className="spotlight-controls">
          <h3>Klarheit</h3>
          <p>
            Eine gute Funktionstüchtigkeit des Scheinwerfersystems und der
            Zugang zu tiefer Informationsverarbeitung werden durch Klarheit und
            Präzision unserer Wahrnehmung erreicht.
          </p>
          <input
            type="range"
            min="6"
            max="7"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
        <div className="spotlight-controls">
          <h3>Mehrwert</h3>
          <p>
            Der Mehrwert der gewonnenen Informationen entsteht durch kreatives
            Verknüpfen mit bestehenden Inhalten, Erfahrungen und Gefühlen.
            Kreativität eröffnet Lösungsmöglichkeiten und schafft Raum für neue
            Ideen.
          </p>
        </div>

        <div className="spotlight-controls" style={{ zIndex: 2 }}>
          <div className="slider-block">
            <input
              type="range"
              min="0.10"
              max={Math.PI / 2 - 0.1}
              step="0.01"
              value={Math.PI / 2 - angle}
              onChange={(e) => {
                setAngle(Math.PI / 2 - Number(e.target.value));
                setIntensity(
                  mapRange(
                    Number(e.target.value),
                    0.1,
                    Math.PI / 2 - 0.1,
                    30,
                    500
                  )
                );
              }}
            />
            <label>Fokus</label>
            {/* <div className="label-improvement">self-management</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={penumbra}
              onChange={(e) => setPenumbra(Number(e.target.value))}
            />
            <label>Streulicht</label>
            {/* <div className="label-improvement">self-management</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="6"
              max="7"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
            <label>Funktion</label>
            {/* <div className="label-improvement">attention</div> */}
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "175vh" }}>
        <div
          className="left-col"
          style={{ gridRow: "1", gridColumn: "1 / span 3" }}
        >
          <h3>Ziel: Klarheit</h3>
          <p>
            Klarheit ist für unsere kognitiven Prozesse von großer Bedeutung.
            Klare Gedanken verbessern unsere Aufmerksamkeit,
            Konzentrationsfähigkeit, Wahrnehmung und Erinnerung, um im
            beschleunigten Zeitalter den besten Nutzen aus Technologien ziehen
            zu können.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "4 /span 4" }}>
          <p>Problem </p>
          <h2>Informationsdichte</h2>
          <p>
            Klarheit ist für unsere kognitiven Prozesse von großer Bedeutung.
            Klare Gedanken verbessern unsere Aufmerksamkeit,
            Konzentrationsfähigkeit, Wahrnehmung und Erinnerung, um im
            beschleunigten Zeitalter den besten Nutzen aus Technologien ziehen
            zu können.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <p>Wissenswert </p>
          <h2>Wahrnehmung</h2>
          <p>
            Die Halbwertszeit mit der wir uns einer Information zuwenden, wird
            sowohl im Digitalen als auch im Analogen immer kürzer. An jeder Ecke
            lauern Reize, die die Aufmerksamkeit an sich reißen zu versuchen.
            Der Botenstoff Dopamin ist nur einen Handgriff entfernt. Zu jeder
            Zeit, an jedem Ort. Obwohl der langfristige Gewinn mentaler Präsenz
            höher ist, entscheiden wir uns immer wieder für einen kurzen
            Dopamin-Kick in der Gegenwart - die bewusste Wahrnehmung unserer
            Umwelt gerät in Mitleidenschaft.
          </p>
          <br />
          <p>Quicktipp - Präsenz und Wahrnehmung statt Konsum</p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "2" }}
        >
          <h2>Gedächtnisfaulheit</h2>
          <p>
            Man kann sich das Arbeitsgedächtnis als eine Art elektrische
            Schleife vorstellen. Alles, was im Arbeitsgedächtnis landet, wird
            uns bewusst und wir können damit arbeiten. Selbst wenn ein anderer
            Reiz bereits abgeklungen ist und wir unseren Fokus auf etwas anderes
            richten, befindet sich die zuvor aufgenommene Information zwischen
            15-30 Sekunden (selten bis zu 60 Sekunden) in der Schleife, bevor
            sie verworfen oder ins Langzeitgedächtnis überführt wird. Dieser
            Mechanismus nennt sich Nachhalleffekt. Bei einer Überlappung von
            neuen und alten Informationen entstehen Querverbindungen, die uns
            neue Sichtweisen oder spontane Einfälle bringen können. Das
            Arbeitsgedächtnis ist störanfällig. Je geringer die Selektion durch
            unsere Aufmerksamkeit, desto mehr Informationen sammeln sich im
            Arbeitsgedächtnis an. Zu viele Informationen hemmen die Überlappung
            von Informationen: es entstehen keine Querverbindungen und auch die
            Überführung in das Langzeitgedächtnis findet weniger häufig statt.
          </p>
          <br />
          <p>
            Quicktipp Merkfähigkeit trainieren. - Zahlen, Adressen, Geburtstage
          </p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "4" }}
        >
          <h2>Arbeitsgedächtnis</h2>
          <p>
            Man kann sich das Arbeitsgedächtnis als eine Art elektrische
            Schleife vorstellen. Alles, was im Arbeitsgedächtnis landet, wird
            uns bewusst und wir können damit arbeiten. Selbst wenn ein anderer
            Reiz bereits abgeklungen ist und wir unseren Fokus auf etwas anderes
            richten, befindet sich die zuvor aufgenommene Information zwischen
            15-30 Sekunden (selten bis zu 60 Sekunden) in der Schleife, bevor
            sie verworfen oder ins Langzeitgedächtnis überführt wird. Dieser
            Mechanismus nennt sich Nachhalleffekt. Bei einer Überlappung von
            neuen und alten Informationen entstehen Querverbindungen, die uns
            neue Sichtweisen oder spontane Einfälle bringen können. Das
            Arbeitsgedächtnis ist störanfällig. Je geringer die Selektion durch
            unsere Aufmerksamkeit, desto mehr Informationen sammeln sich im
            Arbeitsgedächtnis an. Zu viele Informationen hemmen die Überlappung
            von Informationen: es entstehen keine Querverbindungen und auch die
            Überführung in das Langzeitgedächtnis findet weniger häufig statt.
          </p>
          <br />
          <p>
            Quicktipp - Menge an Informationen reduzieren - Denkpausen einlegen
          </p>
        </div>
      </div>
      <div className="container" style={{ height: "125vh" }}>
        <div
          className="left-col"
          style={{ gridRow: "1", gridColumn: "1 / span 3" }}
        >
          <h3>Ziel: Konzentration</h3>
          <p>
            Konzentration ist ein vorübergehender geistiger Zustand und eine
            Voraussetzung dafür, dass wir kritisch reflektieren, logisch denken
            und einander Gedankengängen folgen können. Je präziser unsere
            Konzentration, desto tiefer ist das geistige Durchdringen. Wenn wir
            uns voll und ganz auf etwas einlassen, steigt die Verarbeitungstiefe
            und die Menge gespeicherter Inhalte.Konzentrierte Aufmerksamkeit
            führt in (fast) allen Bereichen des Lebens zu präzisiertem Denken
            und Handeln. Leistungssteigerung Die durch Konzentration eingehende
            Leistungssteigerung wird durch Synchronisation der neurologischen
            Hirnstromfrequenzen verschiedener Hirnareale erreicht. Befinden sie
            sich auf einer “gemeinsamen Wellenlänge”, wird der Neurotransmitter
            Acetylcholin vermehrt ausgeschüttet. Das verbessert die
            Kommunikation und den Informationsaustausch zwischen den
            Nervenbahnen. (s) Tiefe Konzentration bzw. das Versinken in Aufgaben
            steigert unsere Fähigkeiten in Bezug auf Intelligenzleistungen wie
            logisches Denken, Abstraktionsvermögen und das Gedächtnis.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "4 /span 4" }}>
          <p>Problem </p>
          <h2>Ablenkungsdichte</h2>
          <p>
            In der heutigen Zeit geht Konzentration oft verloren. In Momenten
            der Langeweile oder Stress sind wir anfälliger für Störungen. Sowohl
            in Unter- als auch in Überstimulierten Situationen entsteht das
            Bedürfnis, die eigene Stimmung zu verbessern(t). Der impulsive Griff
            zum Smartphone ist ein alltägliches Handlungsmuster, mit dem wir
            genau das versuchen. Aufgrund fragmentierter Lebens- und
            Arbeitsweisen sowie der generellen Störanfälligkeit neigen wir zu
            häufigen Wechseln der Aufmerksamkeit. Die Fülle an Informationen und
            Aufgaben, die gleichzeitig auf uns einprasseln, verhindert, dass wir
            uns längere Zeit ausschließlich einer Sache widmen können.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <p>Wissenswert </p>
          <h2>Aufmerksamkeitswechsel</h2>
          <p>
            Aufmerksamkeitswechsel sind grundsätzlich fehlerbehaftet. Die
            Neuausrichtung auf ein anderes Ziel sowie das Zurückkehren zur
            ursprünglichen Aufgabe verbrauchen geistige Ressourcen und erhöhen
            die Fehlerrquote(S). Unterbrechungen werden oft als störend
            empfunden und können Unzufriedenheit verursachen(S), insbesondere
            bei konzentrierter Arbeit: denn wir distanzieren uns von unseren
            Zielen. Andererseits können Unterbrechungen bei unliebsamen Aufgaben
            als willkommen empfunden werden (Mood-Management Theorie). Im
            Gegensatz zu Computern ist das menschliche Gehirn nicht auf
            Multitasking ausgelegt. Unsere Fähigkeit, mehrere Aufgaben
            gleichzeitig zu erledigen, variiert je nach Schwierigkeitsgrad der
            Aufgaben und unserer Erfahrung. Während uns einfache, automatisierte
            Tätigkeiten wie Atmen beim Schreiben leichtfallen, sind komplexere
            Aufgaben wie gleichzeitiges Navigieren einer unbekannten Stadt und
            aufmerksames Hören eines Radiosenders sehr schwierig. Beide Prozesse
            erfordern Kontrolle und geistige Zuwendung.
          </p>
          <br />
          <p>
            Quicktipp - Bündle ähnliche Aufgaben. Der Wechsel benötigt bei
            ähnlichen Aufgaben kaum geistige Ressourcen. Ist der wechsel
            zwischen Verschiedenen Aufgaben unumgänglich... - Lege kurze Pausen
            ein
          </p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "2" }}
        >
          <h2>Menschliche Ungeduld</h2>
          <p>
            Der Hang zum vermeintlichen Multitasking ist oft ein Ausdruck
            menschlicher Ungeduld. Besonders beim Surfen im Internet üben wir
            ungeduldiges und impulsives Verhalten. Der beschleunigte
            Lebenswandel mit seinen zahlreichen digitalen Konsumoptionen kann
            unsere Ungeduld zusätzlich verstärken. Ungeduld beeinflusst unser
            Verhalten und führt zu Impulsivität. In der Kassenschlange des
            Supermarkts neigt man eher zu gereiztem und impulsivemVerhalten, da
            diese Tätigkeit oftmals als lästiges Mittel zum Zweck angesehen
            wird. Unfreundlichkeit, Drängeln oder innerlich kochen sind die
            Folgen daraus. Dennoch kann uns Ungeduld auch antreiben und kreativ
            machen: sie kann Energie freisetzen und Bewegung in unsere Pläne
            bringen. Allerdings erfordert die Umsetzung einer Idee Zeit und
            Geduld.
          </p>
          <br />
          <p>
            Quicktipp - Realitätscheck Schafft in vielen Situation eine Distanz
          </p>
        </div>
      </div>
    </>
  );
}
