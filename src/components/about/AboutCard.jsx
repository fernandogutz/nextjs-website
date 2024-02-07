import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const AboutCard = () => {
    return (
        <div className="about-card">
            <div className="about-card__img show">
                <img src='/newProfile.jpg' alt="Fernando Gutiérrez" />
            </div>

            <section className="about-card__content ">
                <h2 className="titleOfSection show">
                    <span className='primaryColor'>{'< '}</span> 
                        Sobre Mí 
                    <span className='primaryColor'>{' />'}</span>
                </h2>
                <p className="show">Soy un desarrollador de software Especialista en CMS.</p>
                <br></br>
                <p className="show">Cuento con más de 3 años de experiencia en WordPress y he lanzado más de 30 sitios web en colaboración con empresas y profesionales de diversos sectores.</p>
                <Link className="card__link show" href='/about'>Más sobre mí <i className='AngleRightIcon'><FontAwesomeIcon icon={faAngleRight} /></i></Link>
            </section>
        </div>
    )
}

export default AboutCard