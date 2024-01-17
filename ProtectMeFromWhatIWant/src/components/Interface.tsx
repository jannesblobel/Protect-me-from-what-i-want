import logo from '../assets/logo.png';
type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  const { children } = props;
  return (
    <section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-24
    flex flex-col items-start justify-center text-white`}
    >
      {children}
    </section>
  );
};

export default function Interface() {
  return (
    <>
      <div className="navbar">
        <a href=''><img src={logo} className="logo"/></a>
        <div className='nav-tabs'>
          <a href='/digital-reflection' className="tab">Digital Reflection</a>
          <a  href='/media-competence' className="tab">MEDIA COMPETENCE</a>
          <a  href='/act-now' className="tab">ACT NOW</a>
          <a  href='/who-else' className="tab">WHO ELSE?</a>
        </div>
      </div>
      <Section>
        <h1 className="h1-pxgrotesk">Protect me from what I want</h1>
      </Section>
      <Section>
        <div className="column">
          <h1 className="h2-pxgrotesk">Our love for consuming media is an evolution masterpiece, seamlessly connected with the primal reward circuit of our brains.</h1>
          <div className="content">The simple expectation of personal information triggers a dopamine rush that sparks our passion for new and exciting things. And precisely this is what all the big players in the app industry capitalize on, keeping us hooked and engaged in the game. </div>
        </div>
      </Section>
      <Section>
        <div className="column">
          <h1 className="h2-pxgrotesk">Hook Model explains how the app industry keeps us hooked.</h1>
          <div className="content">The Hook Model explains a cycle employed by smartphone apps to captivate users. By triggering actions, delivering variable rewards, and encouraging user investment, a loop is created, fostering a deep connection between the user and the app.</div>
          <image></image>
        </div>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">More Info</h1>
      </Section>
    </>
  );
}
