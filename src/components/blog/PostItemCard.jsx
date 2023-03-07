import { setFormatDate } from '@/functions/setFormatDate'
import Link from 'next/link'
import React, { useEffect } from 'react'

const PostItemCard = ({key, category, date, title, excerpt, slug}) => {

    useEffect(() => {
      setFormatDate(date);
    }, [])
    

  return (
    <article className="PostItemCard" key={key}>
        <p className="PostItemCard__category">{category}</p>
        <Link href={`/blog/${slug}`}><h2 className="PostItemCard__title">{title}</h2></Link>
        <p className="PostItemCard__date">{setFormatDate(date)}</p>
        <div className="PostItemCard__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        <Link href={`/blog/${slug}`} rel="noreferrer" className="card__link">Leer más <i className="fa-solid fa-angle-right"></i></Link>
    </article>
  )
}

export default PostItemCard