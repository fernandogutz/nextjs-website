import { faGithub, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"
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
                    Fernando Gutiérrez
                </h1>
                <p className="About__bio">
                    Diseñador y desarrollador web especialista en sistemas CMS.
                    <br />
                    <br />
                    Me dedico a utilizar la tecnología para resolver problemas muy concretos en empresas, tales como la automatización de procesos, el aumento de la tasa de conversión, y el alcance y retención de clientes.
                    <br />
                    <br />
                    También disfruto mucho ejecutando proyectos para servir directamente a las personas, como en el caso de Godkout.com, plataforma en la cual gestionamos eventos deportivos y premiamos la disciplina, trabajo en equipo y competitividad.
                    <br />
                    <br />
                    En los últimos años, he liderado el lanzamiento de más de 30 sitios web y plataformas, trabajando en colaboración con profesionales y empresas de sectores diversos, incluyendo Automotriz, Ingeniería, E-Commerce y Astronomía, especializándome con el tiempo en Salud y Bienestar.
                    <br />
                    <br />
                    Cuento con más de 3 años de experiencia en WordPress, desarrollando plugins y temas con JavaScript y PHP, maquetando con HTML + CSS o herramientas No Code como Elementor, y migrando desde el CMS tradicional hacia una arquitectura Headless (utilizando Next.js en el Frontend).
                    <br />
                    <br />
                    Conoce más sobre mí en mis redes sociales.
                </p>
                <div className="contact__rrss">
                    <a className="btn-primary" href="https://www.linkedin.com/in/fernandogutzz/" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                    <a className="btn-primary" href="https://www.youtube.com/channel/UCmaIhfDbhOOySR3nCyTRvjA" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faYoutube} /></i></a>
                    <a className="btn-primary" href="https://www.instagram.com/fernandogutz__/" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                </div>

            </div>

        </div>

    )
}

export default About