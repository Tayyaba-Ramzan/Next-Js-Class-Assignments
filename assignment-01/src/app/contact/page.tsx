import styles from '@/app/styles/modules/Contact.module.css';
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.description}>
          We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required className={styles.input} placeholder='Enter Your Full Name' />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className={styles.input} placeholder='Enter Your Email' />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required className={styles.input} placeholder='Enter Your Phone Number'/>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="dietary-preferences">Dietary Preferences</label>
            <textarea id="dietary-preferences" name="dietary-preferences" className={styles.textarea} placeholder='Enter Your Dietary Preferences'></textarea>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea id="message" name="message" required className={styles.textarea} placeholder="Type your message or comments..."></textarea>
          </div>
          <button className={styles.button} type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
