import Skills from '@/components/skills/Skills'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const SkillsPage = ({ skills }) => {

    useEffect(() => {
        setActiveMenuLink('skills');
      }, [])

    return (
        <>
            <Header></Header>

            <div className="main-container">
                <div className="content-container">

                    <Skills listOfSkills={skills.listOfSkills}></Skills>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export async function getStaticProps() {
    // Fetch data from external API
    //const res = await fetch('http://localhost:3000/api/skills')
    const res = await fetch('https://nextjs-website-ashy.vercel.app/api/skills')

    const skills = await res.json()

    // Pass data to the page via props
    return { props: { skills } }
}

export default SkillsPage