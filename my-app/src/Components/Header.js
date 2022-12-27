import React from 'react'
import styles from "../Header.module.css"

export default function Header() {
  return (
    <>
    <nav className={styles.navigationBar}>
    <img className={styles.logo} src="https://graphicsfamily.com/wp-content/uploads/edd/2021/02/Vector-Gym-Logo-PSD-Template-PNG-Transparent.png" alt='img'/>
    <a className={styles.navigationComponent}href="/">Home</a>
    <a className={styles.navigationComponent} href="/">About</a>
    <a className={styles.navigationComponent} href="/">Pricing</a>
    <a className={styles.navigationComponent} href="/">Program</a>
    <button className={styles.navigationButton}>Register Now</button>
</nav>
    </>
  )
}
