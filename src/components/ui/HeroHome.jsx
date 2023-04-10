import Link from "next/link";

const HeroHome = () => {

  return (
    <div className='hero-bg'>
      <div className="main-container">
        <div className="content-container">

          <div className="HeroHome__content">
            <p className="hero__subtitle hero__subtitle--prev"> <span id="heroHand" className="hero__hand">👋</span>  ¡Hola! Soy Fernando</p>
            <h1 className="hero__title">Frontend <span>Developer</span></h1>
            {/* <p className="hero__subtitle">Enfocado en la creación de productos y experiencias digitales para proyectos que me inspiran.</p> */}
            <div className="hero__buttons">
              <Link className="hero__btn btn-primary" href="/portfolio">Ver Proyectos</Link>
              <Link className="hero__btn btn-secondary hero__btn--contact" href="/contact">Contacto</Link>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default HeroHome