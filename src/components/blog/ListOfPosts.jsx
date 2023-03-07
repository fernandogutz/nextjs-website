import Link from 'next/link';
import React from 'react'
import ProjectItemCard from '../portfolio/ProjectItemCard';
import PostItemCard from './PostItemCard';

const ListOfPosts = ({ posts, limit = 999 }) => {

    const displayPost = (post) => {
        return (
            <h2 key={post.id} >
                <Link href={'/blog/' + post.slug}>{post.title.rendered}</Link>
            </h2>
        )
    }

    return (
        <div className='ListOfPosts'>
            <h2 className="titleOfSection">
                <span className='primaryColor'>{'< '}</span>
                Blog
                <span className='primaryColor'>{' />'}</span>
            </h2>
            <div className='Posts'>
                {posts.map((post, index) => (
                    <PostItemCard
                    key={post.id}
                    category={post.acf.tag}
                    title={post.title.rendered}
                    date={post.date}
                    excerpt={post.excerpt.rendered}
                    slug={post.slug}
                />
                ))}
            </div>
        </div>
    )
}

export default ListOfPosts