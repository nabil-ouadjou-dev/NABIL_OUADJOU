import { useEffect, useRef } from "react";
import "./Projects.css";


const projects = [
  {
    title: "Guardy",
    category: "Web platform · Team project",
    description:
      "A platform that connects parents with temporary childcare services inside shopping malls. Parents search on a map, compare daycares, book a slot and get a confirmation, while managers follow bookings from a dedicated dashboard.",
    tags: ["Laravel", "React", "MySQL"], 
    accent: "#c8613a",
    image: "",
    live: "",
    code: "https://github.com/nabil-ouadjou-dev/guardykids.git",
  },
  
];

function ProjectRow({ project, index }) {
  const ref = useRef(null);

  // fade the row in the first time it scrolls into view
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

  const { title, category, description, tags, accent, image, live, code } =
    project;

  return (
    <article ref={ref} className="project" style={{ "--accent-p": accent }}>
      <span className="p-index">{String(index + 1).padStart(2, "0")}</span>

      <div className="p-media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        ) : (
          <span className="p-initial" aria-hidden="true">
            {title.charAt(0)}
          </span>
        )}
      </div>

      <div className="p-body">
        <p className="p-category">{category}</p>
        <h3 className="p-title">{title}</h3>
        <p className="p-desc">{description}</p>

        <ul className="p-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {(live || code) && (
          <div className="p-links">
            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer">
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-head">
        <span className="projects-label">(02) Selected work</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}