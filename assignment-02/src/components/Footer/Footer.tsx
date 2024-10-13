import styles from '@/components/Footer/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 ApexBusiness. All rights reserved.</p>
      <ul className={styles.footerLinks}>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  );
}