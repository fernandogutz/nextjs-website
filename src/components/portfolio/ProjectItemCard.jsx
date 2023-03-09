import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const ProjectItemCard = ({tag, urlImg, altImg, title, description, urlBtn, textBtn}) => {
  return (
    <article className="project" data-aos="fade-up">
      {/* <h4 className="project__tag">{tag}</h4> */}
      <img className="project__img" src={urlImg} alt={altImg}/>
      <section className="project__contentSection">
          <h3 className="project__title">{title}</h3>
          <div className="project__description" dangerouslySetInnerHTML={{ __html: description }}></div>
          <Link href={`/portfolio/${urlBtn}`} rel="noreferrer" className="card__link">{textBtn} <i className='AngleRightIcon'><FontAwesomeIcon icon={faAngleRight} /></i></Link>
      </section>
    </article>
  )
}

export default ProjectItemCard