import Skills from "../skills/Skills"

const About = ({ skills }) => {
    return (
        <div className="AboutContainer">

            <div className="About">
                <img className="About__img" src="/fernando.jpg" alt="Fernando Gutz Full Stack Developer" />
                <h1 className="titleOfSection About__title">
                    <span className='primaryColor'>{'< '}</span>
                    Sobre Mí
                    <span className='primaryColor'>{' />'}</span>
                </h1>
                <p className="About__bio">
                    Soy un desarrollador de software enfocado en tecnologías web.
                    <br />
                    <br />
                    Suelo programar tanto del lado del cliente como del servidor, sin embargo, me especializo en Frontend para tener un contacto más directo con los usuarios y complementar mis skills técnicas con Diseño UX.
                    <br />
                    <br />
                    Actualmente estoy enfocado en React y en paralelo experimento con tecnologías para desarrollar sitios web inmersivos (Blender, Three.js, etcétera).
                    <br />
                    <br />
                    Me divierto creando productos y experiencias digitales desde cero en torno a temas que me apasionan y disfruto compartiendo mi conocimiento mediante asesorías, artículos y contenido en redes sociales.
                </p>
                <div className="contact__rrss">
                    <a className="btn-primary" href="https://www.linkedin.com/in/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    {/* <a className="btn-primary" href="https://www.instagram.com/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a> */}
                    <a className="btn-primary" href="https://github.com/fernandogutz" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                </div>

            </div>
            
        </div>

    )
}

export default About