import PostContent from '@/components/blog/PostContent';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Post = ({ posts }) => {
  const router = useRouter();

  const displayPost = (slug) => {
    const postItem = posts.find(postWP => postWP.slug == slug); // evidentemente esto no funcionará tal cual, debo encontrar por slug

    if (!postItem) {
      return <h1>ERROR 404</h1>
    }


    return (
      <div className='Post'>
        <div className="breadcrumbs">
          <Link href='/'>Inicio</Link> / <Link href='/blog'>Blog</Link> / <span>{postItem.title.rendered}</span>
        </div>
        <PostContent post={postItem}></PostContent>
      </div>



    )
  }

  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="content-container">

          {
            displayPost(router.query.post)
          }

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch('https://nextjs-website-ashy.vercel.app/api/posts')
  const posts = await res.json()

  // Pass data to the page via props
  return { props: { posts } }
}

export async function getStaticPaths() {
  const res = await fetch('https://nextjs-website-ashy.vercel.app/api/posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { post: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export default Post
