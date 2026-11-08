import "./Home.css";

const stack = ["Laravel", "PHP", "MySQL", "React", "Redux", "JavaScript"];

function Word({ text, start = 0 }) {
  return (
    <span className="word" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span key={i} className="letter" style={{ "--i": start + i }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-top">
        <span className="status">
          <span className="dot" />
          Available for internships
        </span>
        <span className="meta">Morocco · Open to relocate</span>
      </div>

      <h1 className="hero-name" aria-label="Nabil Ouadjou">
        <Word text="NABIL" />
        <Word text="OUADJOU" start={5} />
      </h1>

      <div className="hero-bottom">
        <p className="role">
          Full-stack <em>web developer</em>
        </p>

        <p className="intro">
          OFPPT-trained developer building complete web apps: Laravel and MySQL
          on the back end, React and Redux on the front end. Looking for an
          internship where I can ship real features and keep learning.
        </p>

        <div className="cta">
          <a href="#projects" className="btn primary">
            View projects <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn">
            Contact me
          </a>
          <a href="/cv.pdf" className="btn ghost" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
            <span key={i}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}