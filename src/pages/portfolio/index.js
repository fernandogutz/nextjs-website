import ListOfPosts from '@/components/blog/ListOfPosts'
import Projects from '@/components/portfolio/Projects'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { setActiveMenuLink } from '@/functions/setActiveMenuLink'
import { useEffect } from 'react'

const Blog = ({ projects }) => {

    useEffect(() => {
        setActiveMenuLink('portfolio');
    }, [])

    console.log(projects);

    return (
        <>
            <Header></Header>

            <div className="main-container">
                <div className="content-container">

                    {/**
                     * FILTROS
                     * 
                     * 1) Aplicaciones web
                     *  - GodKout
                     *  - Be Digital Platform
                     *  - BeDigitalChat
                     *  - Pomotask
                     * 
                     * 2) Sitios web
                     *  - Mars 3D
                     *  - AI Image generator
                     *  - Innova Dental
                     *  - FernandoGutz
                     * 
                     * 3) E-Commerce
                     *  - Shop Godkout
                     *  - Fercia
                     *  - Pet Bed
                     *  - Clothing Race
                     */}

                    <Projects projects={projects} ></Projects>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

// This gets called on every request
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch('https://blog.fernandogutz.com/wp-json/wp/v2/project?per_page=100')
    const projects = await res.json()

    // Pass data to the page via props
    return { props: { projects } }
}

export default Blog