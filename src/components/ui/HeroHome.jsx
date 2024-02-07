import Image from "next/image";
import Link from "next/link";

const HeroHome = () => {

  return (
    <div className='hero-bg'>
      <div className="main-container">
        <div className="content-container">

          <div className="HeroHome__content">
            <div className="hero__image" width="200" height="200">
              <Image src="/newProfile.jpg" fill alt="Fernando Gutz Full Stack Developer" />
            </div>
            <h1 className="hero__title">Programador Web</h1>
            <p className="hero__subtitle">Desarrollo Sitios Web, Plataformas y Academias Online</p>
            <div className="hero__buttons">
              <Link className="hero__btn btn-primary" href="/contact">Contacto</Link>
              <Link className="hero__btn btn-secondary hero__btn--contact" href="/portfolio">Portfolio</Link>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default HeroHome