import { useState } from "react";
import Spot from "../components/3D-Storytelling/Spot";
import SpotLightScene from "../components/SpotLightSceneNew";
import "../scss/MediaCompetenceRework.scss";
import "../scss/PageLayout.scss";

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
  const [rot, setRot] = useState(1);

  return (
    <>
      <div className="container">
        <aside className="left-col">
          <h3>Friction</h3>
        </aside>
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
        <aside
          className="left-col"
          style={{ gridRow: "span 4", height: "22vh" }}
        >
          <h3>Begriffserklärung</h3>
        </aside>
        <aside
          className="left-col"
          style={{ gridRow: "5 / span 1", height: "78vh" }}
        >
          <h3>Volker Busch, 2021</h3>
        </aside>
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
        <aside className="left-col" style={{ gridRow: "1", top: "12vh" }}>
          <h3>Spotlight</h3>
          <p>
            Das Zusammenspiel zwischen Aufmerksamkeit und Selbstregulierung kann
            wie ein Scheinwerfer verstanden werden.
          </p>
        </aside>
        <div className="spotlight-visual">
          <p>Darstellung Spotlight</p>
          <SpotLightScene
            rot={rot}
            intensity={intensity}
            angle={angle}
            distance={distance}
            penumbra={penumbra}
          />
        </div>

        <div
          className="spotlight-controls"
          style={{ gridRow: "1", justifyContent: "start" }}
        >
          <p style={{ paddingBlockEnd: "24vh" }}>Begriffe</p>
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
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={rot}
            onChange={(e) => {
              setRot(Number(e.target.value));
            }}
          />
        </div>

        <div
          className="spotlight-controls"
          style={{ zIndex: 2, paddingBlockEnd: "20vh" }}
        >
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
            <label>
              Fokus <p style={{ color: "#C6B7FF" }}>Konzentration</p>
            </label>
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
            <label>
              Streulicht<p style={{ color: "#C6B7FF" }}>Selbstmanagement</p>
            </label>
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
            <label>
              Funktion <p style={{ color: "#C6B7FF" }}>Klarheit</p>
            </label>
            {/* <div className="label-improvement">attention</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={rot}
              onChange={(e) => {
                setRot(Number(e.target.value));
              }}
            />
            <label>
              Mehrwert <p style={{ color: "#C6B7FF" }}>Kreativität</p>
            </label>
          </div>
        </div>
      </div>
      <div className="text-container">
        <aside
          className="left-col"
          style={{ gridRow: "1", gridColumn: "1 / span 3" }}
        >
          <h4>Ziel</h4>
          <h3>Klarheit</h3>
          <p>
            Klarheit ist für unsere kognitiven Prozesse von großer Bedeutung.
            Klare Gedanken verbessern unsere Aufmerksamkeit,
            Konzentrationsfähigkeit, Wahrnehmung und Erinnerung, um im
            beschleunigten Zeitalter den besten Nutzen aus Technologien ziehen
            zu können.
          </p>
        </aside>
        <div
          className="section-textblock section-sticky"
          style={{ gridColumn: "4 /span 4" }}
        >
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
          <h5>Quicktipp</h5>
          <p>↘ Präsenz und Wahrnehmung statt Konsum</p>
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
          <h5>Quicktipp</h5>
          <p>
            ↘ Merkfähigkeit trainieren.
            <br />↘ Zahlen, Adressen, Geburtstage
          </p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "3" }}
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
          <h5>Quicktipp</h5>
          <p>
            ↘ Menge an Informationen reduzieren <br />
            ↘Denkpausen einlegen
          </p>
        </div>
      </div>
      <div className="text-container">
        <aside
          className="left-col"
          style={{ gridRow: "1", gridColumn: "1 / span 3" }}
        >
          <h4>Ziel</h4>
          <h3> Konzentration</h3>
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
        </aside>
        <div
          className="section-textblock  section-sticky"
          style={{ gridColumn: "4 /span 4" }}
        >
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
          <h5>Quicktipp</h5>
          <p>
            ↘ Bündle ähnliche Aufgaben. Der Wechsel benötigt bei ähnlichen
            Aufgaben kaum geistige Ressourcen. Ist der wechsel zwischen
            Verschiedenen Aufgaben unumgänglich... - Lege kurze Pausen ein
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
          <h5>Quicktipp</h5>
          <p>↘ Realitätscheck Schafft in vielen Situation eine Distanz</p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "3" }}
        >
          <h2>Störreize</h2>
          <p>
            Das ständige Störfeuer um uns herum beeinflusst, wie lange wir die
            Konzentration aufrechterhalten können. Ist sie einmal abhanden
            gekommen, fällt es oft sehr schwer, sie wiederzugewinnen. Die
            Fähigkeit, Störungen zu unterdrücken und die Konzentration selbst
            sind zwei voneinander getrennte Systeme, die jeweils viel Energie
            benötigen und unterschiedlich stark ausgeprägt sein können.
            Störungen können nicht einfach kognitiv unterdrückt werden – der
            allseits bekannte rosa Elefant, an den es nicht zu denken gilt, ist
            ein gutes Beispiel: der Versuch kognitiver Unterdrückung führt zum
            Gegenteil. Stattdessen sollten wir uns an Kindern orientieren, die
            sich zum Spielen in eine Ecke setzen: sie reduzieren instinktiv
            Ablenkungen, um konzentrierter denken zu können.
          </p>
          <br />
          <h5>Quicktipp</h5>
          <p>
            ↘ Innehalten und Realitätscheck Sind mir die Informationen nun
            wirklich wichtig?
          </p>
        </div>
        <div
          className="section-textblock"
          style={{ gridColumn: "8 /span 4", gridRow: "4" }}
        >
          <h2>Störreize mit emotionalen Bezug</h2>
          <p>
            Die ausgeprägtesten Störungen sind oft dien, zu denen wir einen
            emotionalen Bezug haben oder die persönlich an uns gerichtet sind.
            Wenn wir uns einmal über eine laut telefonierende Person in der Bahn
            geärgert haben, fällt es uns ab diesem Moment noch schwerer, den
            Störreiz zu ignorieren.
          </p>
          <br />
          <h5>
            Quicktipp <br />
          </h5>
          <p>
            ↘ Ablenkende Reize reduzierenm ist die effektivste Methode,
            Störungen zu unterdrücken. Gutes Selbstmanagement umfasst, die
            Störreize um sich herum zu minimieren.
            <br /> ↘ Noise-Cancelling-Kopfhörer oder Ohropads, sind eine gute
            Lösung, für den Öffentlichen Raum.
          </p>
        </div>
      </div>
      <div className="text-container">
        <aside
          className="left-col"
          style={{ gridRow: "1", gridColumn: "1 / span 3" }}
        >
          <h4>Ziel</h4>
          <h3>Kreativität</h3>
          <p>
            Kreativität ist die Lebenskunst, mit der wir an Herausforderungen
            herangehen. Kreativ zu sein bedeutet, sich fantasievolle Lösungen
            für Probleme einfallen zu lassen und Antworten auf relevante Fragen
            im Alltag zu finden. Sie geben uns das Gefühl der Kontrolle, denn
            sie helfen uns das Leben zu meistern. Kreativität stärkt unser
            Selbstvertrauen, stimmt zuversichtlich und beruhigt unser
            Stresssystem.
          </p>
        </aside>

        <div
          className="section-textblock section-sticky"
          style={{ gridColumn: "4 /span 4" }}
        >
          <p>Problem </p>
          <h2>Medialer Dauerkonsum</h2>
          <p>
            Arbeitnehmer*innen klagen über deutlich weniger Stress im Alltag,
            wenn sie über die Fähigkeit verfügen, ihre Probleme durch Reflexion
            und konsequentes Handeln zu lösen (188). Leider geraten die
            genannten Aspekte durch den von Dauerkonsum erzeugten Stress in
            Mitleidenschaft. Dabei wären diese Fähigkeit zum Belastungszeitpunkt
            von unschätzbarem Wert und eine große Hilfe, um die Ursachen zu
            bekämpfen und die resultierenden Beschwerden zu reduzieren(s). Die
            Komplexität der Arbeitsabläufe wird immer höher und geistige
            Leerlaufphasen werden mit digitalen Konsum gefüllt. Jugendliche
            beschweren sich über geringe Selbstwirksamkeit und geringe mentale
            Autonomie(s). Es wird erwartet, zu jeder Zeit in jedem Ort präsent
            zu sein - Wir entkoppeln kaum von der digitalen Welt. Es fehlt an
            Freiräumen für den Geist, um über bestimmte Dinge in Ruhe
            nachzudenken - in in sich selbst hinein zu spüren. Es fällt Menschen
            durch diese Dauerbelastung schwer, nichts zu tun. Langeweile ist für
            viele kaum mehr aushaltbar - und der Kontakt zu uns selbst bricht
            ab.
          </p>
        </div>

        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <p>Wissenswert </p>
          <h2>Assoziation</h2>
          <p>
            Kreativität entsteht durch Assoziation. Assoziation ist die
            Fähigkeit des Gehirns, Informationen miteinander zu verknüpfen und
            in Beziehung zu setzen. Aus aktuellen Sinneseindrücken, Erfahrungen
            und vorhandenem Wissen formen sich unsere Gedanken und Gefühle. Dass
            uns etwas einfällt, ist das Ergebnis einer Verknüpfung von
            Informationen, die größtenteils bereits vorhanden sind. <br />
            Thomas Edison formulierte es so: "Genie bedeutet nur 1% Inspiration,
            aber 99% Transpiration." <br /> Um assoziieren zu können, benötigen
            wir lediglich eine überschaubare Menge an Informationen. Denken wir
            an unsere Kindheitstage zurück: Wie viele Legosteine brauchten wir,
            um kreativ zu sein? Eine gewisse Anzahl war nötig, doch zu viele
            Steine steigerten nicht unbedingt unsere Kreativität. Heutzutage
            mangelt es nicht an Steinen (Informationen), sondern an Zeit und
            Ruhe, um mit ihnen zu arbeiten. Um den ersten Einfall einer
            brauchbaren und realitätsnahen Idee zu entwickeln zu können,
            erfordert es Grübeln. Dabei denken wir konkret über das Problem und
            mögliche Lösungsansätze nach, ergänzen Perspektiven und stellen
            Pläne zur Umsetzung auf. Manche Erfinder*innen sehen kreatives
            Denken als wichtigsten Bestandteil für den persönlichen Erfolg.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <h2>Kreativität und mentale Gesundheit</h2>
          <p>
            Das Lösen von Problemen ist eine effektive Form der
            Stressbewältigung im Alltag(s). Stress erhöht die innere Anspannung,
            die nicht allein durch muskuläre Entspannung gelöst werden kann.
            Lang anhaltender Stress erfordert eine Wendung nach innen. Der
            gesamte kreative Lösungsprozess umfasst nicht nur die Entwicklung
            von Ideen, sondern auch das Überwinden gedanklicher Hürden,
            Durchspielen von Alternativen und das Ableiten konkreter
            Handlungsschritte. Freies Assoziieren und sorgfältiges,
            angestrengtes Denken sind unverzichtbare Bestandteile dessen.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <h2>Innehalten</h2>
          <p>
            Innehalten ist ein essenzieller Bestandteil jeder Problemlösung.
            Unabhängig von Problemen oder Nöten, mit denen man im Alltag
            konfrontiert ist, stellt Innehalten oft eine kluge Entscheidung dar.
            Probleme lassen sich nicht lösen, indem man sie auf Eis legt. Die
            Bereitschaft angesichts äußerer Belastungen innezuhalten, nimmt ab -
            obwohl gerade das nötig wäre um Belastungsfaktoren und
            Verhaltensmuster zu erkennen. In einer australischen Studie gaben
            16% der Männer und 26% der Frauen an, sich lieber mit ihrem
            Smartphone zu beschäftigen, als sich gedanklich mit einem Problem
            auseinanderzusetzen. Medienkonsum füllt die wenigen freien Phasen
            zwischen eng getakteten Arbeitsabläufen. Der Blick nach Innen findet
            in heutigen Tagesabläufen kaum noch Platz.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <h2>Zertreuung/ Wendung nach Innen</h2>
          <p>
            Die Wendung nach Innen und das Wandern der Gedanken ist ein
            besonderer Geisteszustand, der zunächst vielleicht unbedeutend
            erscheint, aber viel für unser Leben bedeutet. In diesem Zustand
            wird unsere Aufmerksamkeit wenig von äußeren Reizen beeinflusst. Das
            Scheinwerferlicht unserer Wahrnehmung ist gedimmt; wir beginnen zu
            träumen und zu fantasieren, gehen Empfindungen nach, reflektieren,
            hinterfragen, wägen ab und entwickeln Verständnis für andere. Wir
            sind nicht zwangsläufig unaufmerksam, sondern vielmehr von unserer
            Umwelt entkoppelt (reizunabhängige Gedanken). Das Abschweifen der
            Gedanken fällt uns leicht und erfordert keine besondere Anstrengung.
          </p>
        </div>
        <div className="section-textblock" style={{ gridColumn: "8 /span 4" }}>
          <h2>Ruhestandsnetzwerk</h2>
          <p>
            Das Ruhenetzwerk des Gehirns wird aktiviert, sobald wir nichts tun.
            Interessanterweise nimmt die Hirnaktivität in bestimmten Regionen
            sogar zu, wenn wir geistig in Leerlauf sind. Die Funktionen dieser
            Hirnbereiche sind vielfältig und umfassen unter anderem auch die
            Beteiligung an klassischen, kreativen Denkprozessen. Es wurde
            festgestellt, dass kreative Menschen in ihrem Ruhenetzwerk eine
            höhere Konnektivität aufweisen(s). Das deutet darauf hin, dass unser
            kreatives Denken eng mit Phasen des Tagträumens und der Zerstreuung
            verbunden ist. Einige Forscher nehmen an, dass das
            Ruhezustandsnetzwerk maßgeblich zur Identitätsbildung beiträgt(s).
            Es bereichert uns durch innere Entspannung, Erholung,
            Selbsterkenntnis und ein Bewusstsein für unsere Umwelt und innere
            Welt.
          </p>
        </div>
      </div>
    </>
  );
}
