import { faGithub, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const About = ({ skills }) => {
    return (
        <div className="AboutContainer">

            <div className="About">
                <div className="About__img" width="300" height="300">
                    <Image src="/newProfile.jpg" fill alt="Fernando Gutz Full Stack Developer" />
                </div>
                <h1 className="titleOfSection About__title">
                    Fernando Gutiérrez
                </h1>
                <p className="About__bio">
                    Diseñador y Programador Web.
                    <br />
                    <br />
                    Me dedico a desarrollar sitios web, plataformas y academias online para expertos en distintas industrias.
                    <br />
                    <br />
                    En los últimos años, he lanzado más de 50 sitios web y plataformas, trabajando en colaboración con profesionales y empresas de sectores diversos, incluyendo Automotriz, Ingeniería, E-Commerce y Astronomía, especializándome con el tiempo en Salud y Deporte.
                    <br />
                    <br />
                    También disfruto mucho ejecutando proyectos para servir directamente a las personas, como en el caso de Godkout.com, plataforma en la cual gestionamos eventos deportivos y premiamos la disciplina, trabajo en equipo y competitividad.
                    <br />
                    <br />
                    Cuento con amplia experiencia en CMS (Content Management Systems) como WordPress, tecnología con la cual en los últimos 3 años he desarrollado múltiples plugins y temas personalizados con JavasCript y PHP, también he maquetando plantillas con HTML + CSS, y en muchos casos con herramientas No Code como Elementor.
                    <br />
                    <br />
                    También he migrado varios proyectos desde el CMS tradicional hacia una arquitectura Headless, utilizando Next.js en frontend (una de mis tecnologías favoritas).
                    <br />
                    <br />
                    Si deseas contactarme puedes escribir un correo en hello@fernandogutz.com o buscarme en redes sociales:
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