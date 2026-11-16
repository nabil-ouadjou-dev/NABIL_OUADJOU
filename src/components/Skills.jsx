import { useEffect, useRef } from "react";
import "./Skills.css";

/* Edit the groups and items below to match what you really use. */
const groups = [
  {
    title: "Back end",
    items: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Front end",
    items: ["React", "Redux", "JavaScript", "HTML5 & CSS3", "Responsive design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub"],
  },
];

function SkillCard({ group, index }) {
  const ref = useRef(null);

  // fade the card in the first time it scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="skill-card"
      style={{ "--delay": `${index * 120}ms` }}
    >
      <header>
        <span className="skill-num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{group.title}</h3>
      </header>

      <ul>
        {group.items.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <i aria-hidden="true">↗</i>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-head">
        <span className="skills-label">(03) What I work with</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {groups.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}