import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const About = ({ skills }) => {
    return (
        <div className="AboutContainer">

            <div className="About">
                <div className="About__img" width="300" height="300">
                    <Image src="/fernandogutz.jpg" fill alt="Fernando Gutz Full Stack Developer" />
                </div>
                <h1 className="titleOfSection About__title">
                    <span className='primaryColor'>{'< '}</span>
                    Sobre Mí
                    <span className='primaryColor'>{' />'}</span>
                </h1>
                <p className="About__bio">
                    Me apasiona la tecnología y el software, pero mi enfoque va más allá de escribir código o crear productos.
                    <br />
                    <br />
                    Mi verdadera pasión radica en aprovechar la tecnología para resolver problemas concretos en las empresas y liderar proyectos con un impacto tangible en las personas, como en el caso de Godkout.com, donde impulsamos el deporte y la competitividad.
                    <br />
                    <br />
                    He lanzado más de 30 sitios web en colaboración con empresas y profesionales de diversos sectores. 
                    <br />
                    <br />
                    Cuento con más de 3 años de experiencia en WordPress, desarrollando plugins y temas con JavaScript y PHP, maquetando con HTML + CSS o herramientas No Code como Elementor, y migrando WordPress tradicional hacia una arquitectura Headless (utilizando Next.js en el Frontend). Lo que más destaco de este período es la gran cantidad de problemas que he resuelto para mis clientes y empleadores, automatizando partes de su negocio, aumentando su visibilidad y obteniendo más conversiones.
                    <br />
                    <br />
                    Conoce más sobre mí en mis redes sociales.
                </p>
                <div className="contact__rrss">
                    <a className="btn-primary" href="https://www.linkedin.com/in/fernandogutzz/" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                    {/* <a className="btn-primary" href="https://www.instagram.com/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a> */}
                    <a className="btn-primary" href="https://github.com/fernandogutz" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faGithub} /></i></a>
                </div>

            </div>
            
        </div>

    )
}

export default About