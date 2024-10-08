import React from 'react'
import Link from 'next/link'
import styles from "@/app/styles/modules/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <div><img src="images/logo.png" alt="" width={150} /></div>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/menu">Our Menu</Link></li>
        <li><Link href="/recipes">Recipes</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar