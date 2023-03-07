import ProjectItemCard from "./ProjectItemCard"

const Projects = ({ projects, limit }) => {

    const displayPost = (project) => {
        
    }

    return (
        <div className="Projects">
            <h2 className="titleOfSection">
                <span className='primaryColor'>{'< '}</span>
                Portfolio
                <span className='primaryColor'>{' />'}</span>
            </h2>
            <div className="projects">
                {
                    projects.map((project, index) => (
                        <ProjectItemCard
                            key={project.id}
                            tag={project.slug}
                            urlImg={project.acf.img}
                            altImg={project.slug}
                            title={project.title.rendered}
                            description={project.excerpt.rendered}
                            urlBtn={project.slug}
                            textBtn='Detalles del proyecto'
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Projects