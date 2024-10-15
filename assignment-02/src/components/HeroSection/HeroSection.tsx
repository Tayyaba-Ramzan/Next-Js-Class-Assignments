import styles from '@/components/HeroSection/herosection.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1>Transform Your Business with ApexBusiness</h1>
          <p>Empowering your growth with cutting-edge innovation and strategies.</p>
          <button className={styles.heroButton}>Get Started</button>
        </div>
      </div>
    </section>
  );
}
