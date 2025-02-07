import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>The Art of Bold Precision</h1>
      <button className={styles.ctaButton}>Discover Our Work</button>
      <div className={styles.glowEffect}></div>
    </section>
  );
}