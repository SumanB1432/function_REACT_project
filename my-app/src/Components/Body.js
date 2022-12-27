import React from 'react'
import styles from "../Body.module.css"


export default function Body() {
  return (
    <>
    <div className={styles.container} >
      <img className={styles.backgroundImg} src="https://wallpaperaccess.com/full/5595849.jpg" alt='Img'/> 
      <h1 className={styles.center}>MAKE YOU A BODY BUILDER</h1>
      <p className={styles.text} >We Provide Our best opportunity and qualified trainers for best workout yourself as you want </p>
      <button className={styles.leftButton}>Singup Now</button>
      <button className={styles.rightButton}>View Details</button>
    </div>
    </>
  )
}
