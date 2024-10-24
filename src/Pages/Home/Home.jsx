import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Body from '../Body/Body'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <div className='' style={{ paddingTop: '64px' }} >
        <Body />

        </div>
    </div>
  )
}

export default Home