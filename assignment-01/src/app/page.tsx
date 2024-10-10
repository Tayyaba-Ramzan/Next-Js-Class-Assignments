import styles from '@/app/styles/modules/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.overlay}>
        <div><img src="images/logo.png" alt="" width={200} /></div>
          <h1 className={styles.heading}>Welcome to Food Paradise</h1>
          <p className={styles.intro}>
            Discover a world of delightful flavors with our delicious recipes and gourmet experiences, all in one perfect place.
            From quick meals to extravagant feasts, we have something to satisfy every palate and inspire your culinary journey!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
