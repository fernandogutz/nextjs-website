import { setFormatDate } from '@/functions/setFormatDate';
import React from 'react'

const PostContent = ({ post }) => {
    console.log(post);

    return (
        <>
            {post.acf.img && <img className='Post__featuredImg' src={post.acf.img}></img>}
            <div className="PostContentContainer">
                <div className='PostContent'>
                    <h1 className='PostContent__title'>{post.title.rendered}</h1>
                    <p className="PostItemCard__date">{setFormatDate(post.date)}</p>
                    <div className='PostContent__content' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </div>
        </>
    )
}

export default PostContent