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

                    <Projects projects={projects} ></Projects>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('/api/projects')
    const projects = await res.json()

    // Pass data to the page via props
    return { props: { projects } }
}

export default Blog