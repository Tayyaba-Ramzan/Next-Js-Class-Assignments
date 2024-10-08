import styles from '@/app/styles/modules/About.module.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/images/about-img.jpg" alt="About Food Paradise" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.heading}>Food Paradise</h1>
          <p className={styles.content}>
            At Food Paradise, we believe in the transformative power of culinary art. Our team of expert chefs brings not only their skills but also a deep passion and boundless creativity to every dish they prepare. Each meal is crafted with meticulous attention to detail, ensuring that every bite is a delightful experience that tantalizes your taste buds.
            <br /><br />
            We strive to provide exceptional food experiences that not only satisfy your hunger but also evoke emotions and create lasting memories. Whether you are indulging in our signature dishes or exploring new flavors, we are committed to making your culinary journey truly unforgettable.
          </p>

          <p className={styles.content}>
            Join us on a gastronomic journey, where quality and taste are never compromised.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
