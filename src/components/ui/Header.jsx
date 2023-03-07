import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

    <div className="headerContainer">
      <header className="header">
          <div className="header__logo">
            <Link href="/">
              <img src='/logo.png' alt="F de Fernando Gutz"/>
            </Link>
          </div>

          <label htmlFor="checkMenu" id="barMenu" className="header__btn">
              Menú <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="checkMenu" name="checkMenu"/>

          <nav className="header__nav" id="navMenu">
              <label htmlFor="checkMenu" id="xMenu" className="header__btn">
                  Cerrar <i className="fa-solid fa-xmark"></i>
              </label>
              <Link id="home" href="/">Inicio</Link>
              <Link id="portfolio" href="/portfolio">Portfolio</Link>
              <Link id="blog" href="/blog">Blog</Link>
              <Link id="about" href="/about">Sobre mí</Link>
              <Link id="contact" href="/contact">Contacto</Link>
              {/* <a href="https://drive.google.com/file/d/1BTIIF6HUJf3axr3C7cM61h15AtSk3P3z/view?usp=sharing" target='blank'>CV</a> */}
          </nav>
      </header>
    </div>

  )
}

export default Header