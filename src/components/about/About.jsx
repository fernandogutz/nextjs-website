import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const About = ({ skills }) => {
    return (
        <div className="AboutContainer">

            <div className="About">
                <div className="About__img" width="300" height="300">
                    <Image src="/fernando.jpg" fill alt="Fernando Gutz Full Stack Developer" />
                </div>
                <h1 className="titleOfSection About__title">
                    <span className='primaryColor'>{'< '}</span>
                    Sobre Mí
                    <span className='primaryColor'>{' />'}</span>
                </h1>
                <p className="About__bio">
                    Me apasiona la creación de productos y experiencias digitales. 
                    <br />
                    <br />
                    He trabajado con una variedad de empresas en diferentes proyectos, principalmente enfocado en Plataformas Web, desarrollando más de 20 sitios en rubros muy variados.
                    <br />
                    <br />
                    Con una mentalidad centrada en el usuario, me dedico a comprender profundamente los problemas de las personas y co-crear soluciones tecnológicas relevantes con ellos. 
                    <br />
                    <br />
                    Actualmente me especializo en Frontend con React y Next.js, aunque también suelo usar PHP, JavaScript ES6+, jQuery, SQL y CMS WordPress. 
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