import PostContent from '@/components/blog/PostContent';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const project = ({ projects }) => {
    console.log(projects)
  const router = useRouter();

  const displayPost = (slug) => {
    const projectItem = projects.find(project => project.slug == slug); // evidentemente esto no funcionará tal cual, debo encontrar por slug

    if (!projectItem) {
      return <h1>ERROR 404</h1>
    }


    return (
      <div className='Post'>
        <div className="breadcrumbs">
          <Link href='/'>Inicio</Link> / <Link href='/portfolio'>Portfolio</Link> / <span>{projectItem.title.rendered}</span>
        </div>
        <PostContent post={projectItem}></PostContent>
      </div>



    )
  }

  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="content-container">

          {
            displayPost(router.query.project)
          }

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/projects')
  const projects = await res.json()

  // Pass data to the page via props
  return { props: { projects } }
}

export default project