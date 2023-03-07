import Contact from '@/components/contact/Contact'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { setActiveMenuLink } from '@/functions/setActiveMenuLink'
import React, { useEffect } from 'react'

const contact = () => {

  useEffect(() => {
    setActiveMenuLink('contact');
  }, [])

  return (
    <>
      <Header></Header>

      <div className="main-container">
        <div className="content-container">

          <Contact ></Contact>

        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default contact