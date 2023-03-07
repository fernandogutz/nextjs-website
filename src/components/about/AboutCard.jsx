import Link from "next/link"

const AboutCard = () => {
    return (
        <div className="about-card">
            <div className="about-card__img">
                <img src='/fernando.jpg' alt="Fernando Gutiérrez" />
            </div>

            <section className="about-card__content">
                <h2 className="titleOfSection">
                    <span className='primaryColor'>{'< '}</span> 
                        Sobre Mí 
                    <span className='primaryColor'>{' />'}</span>
                </h2>
                <p>Soy un desarrollador de software enfocado en tecnologías web.</p>
                <br></br>
                <p>Suelo programar tanto del lado del cliente como del servidor, sin embargo, me especializo en Frontend para tener un contacto más directo con los usuarios.</p>
                <Link className="card__link" href='/about'>Más sobre mí {'>>'}</Link>
            </section>
        </div>
    )
}

export default AboutCard