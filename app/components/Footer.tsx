import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cosmicEffect}></div>
      <h2>CREATE BOLD IDEAS TOGETHER</h2>
      <p>hello@schrift.com</p>
      <div className={styles.socialIcons}>
        <a href="#">Dribbble</a>
        <a href="#">Behance</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <p className={styles.copyright}>© Copyright Schrift 2024</p>
    </footer>
  );
}