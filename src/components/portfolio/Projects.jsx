import { useState } from "react";
import ProjectItemCard from "./ProjectItemCard"

const Projects = ({ projects, limit }) => {

    const [projectCategory, setProjectCategory] = useState('plataforma');
    const onCategoryChange = (e) => {
        //console.log(e.target.attributes.id.value);
        const newCat = e.target.attributes.id.value;
        setProjectCategory(newCat);
        document.querySelector('.activeCategoryProjects').classList.remove('activeCategoryProjects');
        document.querySelector(`#${newCat}`).className = 'activeCategoryProjects';

    } 

    return (
        <div className="Projects">
            <h2 className="titleOfSection">
                <span className='primaryColor'>{'< '}</span>
                Portfolio
                <span className='primaryColor'>{' />'}</span>
            </h2>

            <div className='techFilters'>
                <button className='activeCategoryProjects' id='plataforma' onClick={onCategoryChange}>Aplicaciones web</button>
                <button id='website' onClick={onCategoryChange}>Sitios web</button>
                <button id='ecommerce' onClick={onCategoryChange}>E-Commerce</button>
            </div>

            <div className="projects">
                {
                    projects.map((project, index) => (

                        project.acf.tag == projectCategory ?
                            <ProjectItemCard
                                key={project.id}
                                tag={project.slug}
                                urlImg={project.acf.img}
                                urlDemo={project.acf.urlDemo}
                                altImg={project.slug}
                                title={project.title.rendered}
                                description={project.excerpt.rendered}
                                urlBtn={project.slug}
                                textBtn='Ver detalles'
                            />

                        : null
                    ))
                }

            </div>
        </div>
    )
}

export default Projects