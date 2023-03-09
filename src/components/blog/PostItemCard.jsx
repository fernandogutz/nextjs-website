import { setFormatDate } from '@/functions/setFormatDate'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const PostItemCard = ({id, category, date, title, excerpt, slug}) => {
  return (
    <article className="PostItemCard" key={id}>
        <p className="PostItemCard__category">{category}</p>
        <Link href={`/blog/${slug}`}><h2 className="PostItemCard__title">{title}</h2></Link>
        <p className="PostItemCard__date">{setFormatDate(date)}</p>
        <div className="PostItemCard__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        <Link href={`/blog/${slug}`} rel="noreferrer" className="card__link">Leer más <i className='AngleRightIcon'><FontAwesomeIcon icon={faAngleRight} /></i></Link>
    </article>
  )
}

export default PostItemCard