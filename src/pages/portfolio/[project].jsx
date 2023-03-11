import PostContent from '@/components/blog/PostContent';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Project = ({ projects }) => {
  const router = useRouter();

  const displayPost = (slug) => {
    const projectItem = projects.find(project => project.slug == slug); 

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
          {displayPost(router.query.project)}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://nextjs-website-ashy.vercel.app/api/projects')
  const projects = await res.json()

  const paths = projects.map(project => ({
    params: { project: project.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps() {
  const res = await fetch(`https://nextjs-website-ashy.vercel.app/api/projects`)
  const projects = await res.json()

  return { props: { projects: projects} }
}

export default Project
