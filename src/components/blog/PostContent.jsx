import { setFormatDate } from '@/functions/setFormatDate';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const PostContent = ({ post }) => {
    console.log(post);

    return (
        <>
            {post.acf.img && <img className='Post__featuredImg' src={post.acf.img}></img>}
            <div className="PostContentContainer">
                <div className='PostContent'>
                    {
                        post.acf.urlDemo ?
                            <Link href={post.acf.urlDemo} rel="noreferrer" className="card__link" target="_blank">
                                Visitar
                                <i className='ExternalLinkIcon'>
                                    <FontAwesomeIcon icon={faExternalLink} />
                                </i>
                            </Link>
                            : <p className="PostItemCard__date">{setFormatDate(post.date)}</p>
                    }
                    <h1 className='PostContent__title'>{post.title.rendered}</h1>
                    <div className='PostContent__content' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </div>
        </>
    )
}

export default PostContent