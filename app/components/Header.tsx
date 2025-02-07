import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Schrift</h1>
        <p>EST. 211224</p>
      </div>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Let’s Talk</Link>
      </nav>
      <button className={styles.menuButton}>☰</button>
    </header>
  );
}