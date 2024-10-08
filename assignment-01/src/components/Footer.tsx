import styles from '@/app/styles/modules/Footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>Food Paradise</h2>
        <p className={styles.description}>
          Your go-to place for delicious recipes and gourmet experiences.
        </p>
        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/menu">Our Menu</Link></li>
          <li><Link href="/recipes">Recipes</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon}>Facebook</a>
          <a href="#" className={styles.socialIcon}>Instagram</a>
          <a href="#" className={styles.socialIcon}>Twitter</a>
        </div>
        <p className={styles.copy}>© 2024 Food Paradise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
