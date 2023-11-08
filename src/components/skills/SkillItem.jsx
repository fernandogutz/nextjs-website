
const SkillItem = ({ urlImg, title }) => {
    return (
        <article className="skill show">
            <img className="skill__img" src={'/tech/'+urlImg} alt={title} />
            <h3 className='skill__title'>{title}</h3>
        </article>
    )
}

export default SkillItem