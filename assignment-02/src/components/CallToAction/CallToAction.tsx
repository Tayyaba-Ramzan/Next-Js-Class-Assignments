import styles from '@/components/CallToAction/calltoaction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2>Ready to Elevate Your Business?</h2>
      <p>Let's help you grow with our expert solutions tailored just for you.</p>
      <button className={styles.ctaButton}>Contact Us Today!</button>
    </section>
  );
}