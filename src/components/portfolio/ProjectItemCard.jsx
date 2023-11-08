import { faAngleRight, faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const ProjectItemCard = ({tag, urlImg, urlDemo, altImg, title, description, urlBtn, textBtn}) => {
  return (
    <article className="project show" data-aos="fade-up">
      {/* <h4 className="project__tag">{tag}</h4> */}
      <img className="project__img" src={urlImg} alt={altImg}/>
      <section className="project__contentSection">
          <h3 className="project__title">{title}</h3>
          <div className="project__description" dangerouslySetInnerHTML={{ __html: description }}></div>
          <div className="card__linksContainer">
            <Link href={`/portfolio/${urlBtn}`} rel="noreferrer" className="card__link">{textBtn} <i className='AngleRightIcon'><FontAwesomeIcon icon={faAngleRight} /></i></Link>
          
            {
              urlDemo && 
                <Link href={urlDemo} rel="noreferrer" className="card__link" target="_blank">
                  Visitar
                  <i className='ExternalLinkIcon'>
                    <FontAwesomeIcon icon={faExternalLink} />
                  </i>
                </Link>
            }

          </div>

        </section>
    </article>
  )
}

export default ProjectItemCard