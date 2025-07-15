import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Main = (props) => {
  return (
    <>
      <Header />
      <main id='main' role='main'>
        {props.children}
        {/* 데이터 전달의 역할 */}
      </main>
      <Footer />
    </>
  )
}

export default Main