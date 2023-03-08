import AboutCard from "@/components/about/AboutCard"
import ListOfPosts from "@/components/blog/ListOfPosts"
import Contact from "@/components/contact/Contact"
import Projects from "@/components/portfolio/Projects"
import Skills from "@/components/skills/Skills"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import HeroHome from "@/components/ui/HeroHome"
import { setActiveMenuLink } from "@/functions/setActiveMenuLink"
import { useEffect } from "react"

export default function Home({ posts, skills, projects }) {

  useEffect(() => {
    setActiveMenuLink('home');
  }, [])


  return (
    <>
      <Header></Header>

      <HeroHome></HeroHome>

      <div className="main-container">
        <div className="content-container">

          <AboutCard></AboutCard>
          <Skills listOfSkills={skills.listOfSkills}></Skills>

          <ListOfPosts posts={posts} limit={3}></ListOfPosts>

          <Projects projects={projects} limit={4}></Projects>

          <hr className="separator"></hr>

          <Contact></Contact>
          

        </div>
      </div>



      {/* Contacto */}

      <Footer></Footer>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://nextjs-website-ashy.vercel.app/api/posts')
  const posts = await res.json()

  const res2 = await fetch('https://nextjs-website-ashy.vercel.app/api/skills')
  const skills = await res2.json()

  const res3 = await fetch('https://nextjs-website-ashy.vercel.app/api/projects')
  const projects = await res3.json()

  // Pass data to the page via props
  return { props: { posts, skills, projects } }
}