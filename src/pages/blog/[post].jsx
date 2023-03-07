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
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  // Pass data to the page via props
  return { props: { posts } }
}

export default Post