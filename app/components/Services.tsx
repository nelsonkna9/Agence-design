import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>WHAT WE PROVIDE</h2>
      <p>Nous transformons vos idées en designs impactants grâce à une approche stratégique et créative.</p>
      <div className={styles.circleBackground}></div>
    </section>
  );
}