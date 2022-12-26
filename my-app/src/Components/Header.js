import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
      <nav className="navigation-bar">
    <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/02/Vector-Gym-Logo-PSD-Template-PNG-Transparent.png" alt='img'/>
    <a href="/">Home</a>
    <a href="/">About</a>
    <a href="/">Pricing</a>
    <a href="/">Program</a>
    <button>Register Now</button>
</nav>
    </>
  )
}
