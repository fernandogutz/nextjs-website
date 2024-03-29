import ListOfPosts from '@/components/blog/ListOfPosts'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { setActiveMenuLink } from '@/functions/setActiveMenuLink'
import { useEffect } from 'react'

const Blog = ({ posts }) => {

    useEffect(() => {
        setActiveMenuLink('blog');
    }, [])

    return (
        <>
            <Header></Header>

            <div className="main-container">
                <div className="content-container">

                    <ListOfPosts posts={posts} ></ListOfPosts>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

// This gets called on every request
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch('https://blog.fernandogutz.com/wp-json/wp/v2/posts?per_page=100')
    const posts = await res.json()

    // Pass data to the page via props
    return { props: { posts } }
}

export default Blog