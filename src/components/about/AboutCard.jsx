import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
                <p>Soy un desarrollador de software especialista CMS.</p>
                <br></br>
                <p>Cuento con más de 3 años de experiencia en WordPress y he lanzado más de 30 sitios web en colaboración con empresas y profesionales de diversos sectores.</p>
                <Link className="card__link" href='/about'>Más sobre mí <i className='AngleRightIcon'><FontAwesomeIcon icon={faAngleRight} /></i></Link>
            </section>
        </div>
    )
}

export default AboutCard