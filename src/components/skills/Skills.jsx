import React from 'react';
import { useState } from 'react';
import SkillItem from './SkillItem';

const Skills = ({listOfSkills}) => {
    const [techCategory, setTechCategory] = useState('all');
    const onCategoryChange = (e) => {
        //console.log(e.target.attributes.id.value);
        const newCat = e.target.attributes.id.value;
        setTechCategory(newCat);
        document.querySelector('.activeCategory').classList.remove('activeCategory');
        document.querySelector(`#${newCat}`).className = 'activeCategory';

    } 

    return (
        <div className='Skills'>
            <h2 className="titleOfSection">
                <span className='primaryColor'>{'< '}</span> 
                    Skills 
                <span className='primaryColor'>{' />'}</span>
            </h2>

            <div className='techFilters'>
                <button className='activeCategory' id='all' onClick={onCategoryChange}>All</button>
                <button id='front' onClick={onCategoryChange}>Front</button>
                <button id='back' onClick={onCategoryChange}>Back</button>
                <button id='design' onClick={onCategoryChange}>Design</button>
                <button id='tool' onClick={onCategoryChange}>Tools</button>
            </div>

            <div className="tech-list">
                {

                    listOfSkills.map(skill => (
                        skill.tag == techCategory || techCategory == 'all' ?
                            <SkillItem
                                urlImg={skill.urlImg}
                                title={skill.title}
                                key={skill.title}
                            />   
                        : null
                    ))
                }
            </div>
        </div>
    )
}

export default Skills