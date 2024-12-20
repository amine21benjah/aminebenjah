import React from 'react'
import Headre from './headre/headre'
import Body from './Body/body'
import Footer from './footer/Footer'

const FirstPage = () => {
  return (
    <div>
        {<Headre></Headre>}
        {<Body></Body>}
        {<Footer></Footer>}
    </div>
  )
}
export default FirstPage
