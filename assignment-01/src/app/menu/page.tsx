import styles from '@/app/styles/modules/Menu.module.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Menu</h1>
        <p className={styles.intro}>Explore our range of gourmet offerings:</p>
        <ul className={styles.list}>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Pizza Margherita</span> - $12
            <p className={styles.itemDescription}>A classic Italian pizza topped with fresh mozzarella, basil, and a drizzle of olive oil.</p>
          </li>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Spaghetti Bolognese</span> - $15
            <p className={styles.itemDescription}>Traditional spaghetti served with a rich and savory Bolognese sauce.</p>
          </li>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Grilled Salmon</span> - $20
            <p className={styles.itemDescription}>Perfectly grilled salmon fillet served with a lemon butter sauce.</p>
          </li>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Tiramisu</span> - $8
            <p className={styles.itemDescription}>A delightful coffee-flavored Italian dessert made with mascarpone cheese.</p>
          </li>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Caesar Salad</span> - $10
            <p className={styles.itemDescription}>Crisp romaine lettuce, croutons, and parmesan cheese tossed in a creamy Caesar dressing.</p>
          </li>
          <li className={styles.ulList}>
            <span className={styles.itemName}>Chocolate Lava Cake</span> - $9
            <p className={styles.itemDescription}>A rich chocolate cake with a gooey molten center, served with vanilla ice cream.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
