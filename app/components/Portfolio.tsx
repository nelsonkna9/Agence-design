import styles from './Portfolio.module.css';

const projects = [
  { id: 1, name: 'Caspian Forest' },
  { id: 2, name: 'Alchemed' },
  { id: 3, name: 'Capsule' },
  { id: 4, name: 'Swoosh!!' },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>FEATURED PORTFOLIO</h2>
      <p>Découvrez comment nous transformons les idées en designs impactants.</p>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <span>{project.id}</span>
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}