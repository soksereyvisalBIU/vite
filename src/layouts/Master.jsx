// import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
const Master = (props) => {
  return (

    <>
        <div>
            <Nav/>
        </div>
    
        <div className='mt-12'>
            {props.children}
        </div>

        <div className='mt-12'>
            <Footer/>
        </div>
        
    </>
    
  )
}

export default Master