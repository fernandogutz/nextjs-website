import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
      <div className="contact" data-aos="fade-up">
          <h2 className="contact__title show">Ponte en contacto</h2>                
          <h5 className="contact__mail show"> <a href="mailto:hello@fernandogutz.com">hello@fernandogutz.com</a></h5>
          <div className="contact__rrss show">
              <a className="btn-primary" href="https://www.linkedin.com/in/fernandogutzz/" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              {/* <a className="btn-primary" href="https://www.instagram.com/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a> */}
              <a className="btn-primary" href="https://github.com/fernandogutz" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faGithub} /></i></a>
          </div>
      </div>
  )
}

export default Contact