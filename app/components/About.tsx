import styles from './About.module.css';

const values = [
  { title: 'Precision', icon: '🎯', description: 'Nous visons la perfection dans chaque détail.' },
  { title: 'Bold', icon: '🔥', description: 'Nous osons être audacieux et innovants.' },
  { title: 'Client-Centered', icon: '👥', description: 'Vos besoins sont au cœur de notre processus.' },
  { title: 'Creative Excellence', icon: '✨', description: 'Nous repoussons les limites de la créativité.' },
];

export default function About() {
  return (
    <section className={styles.about}>
      <h2>ABOUT SCHRIFT</h2>
      <p>Nous sommes une agence de design graphique spécialisée dans la création de designs audacieux et précis.</p>
      <div className={styles.values}>
        {values.map((value, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.icon}>{value.icon}</span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
            <div className={styles.barcode}></div>
          </div>
        ))}
      </div>
    </section>
  );
}