import About from '@/components/about/About'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { setActiveMenuLink } from '@/functions/setActiveMenuLink'
import React, { useEffect } from 'react'

const AboutPage = ({ skills }) => {

  useEffect(() => {
    setActiveMenuLink('about');
  }, [])

  return (
    <>
      <Header></Header>

      <div className="main-container">
        <div className="content-container">

          <About skills={skills}></About>

        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch('http://localhost:3000/api/skills')
  const res = await fetch('https://nextjs-website-ashy.vercel.app/api/skills')

  const skills = await res.json()

  // Pass data to the page via props
  return { props: { skills } }
}

export default AboutPage