import React from 'react'
import MyHeader from '../Header/MyHeader'
import First from './first/First'
import MyHomeCss from './MyHome.css'


function Home() {
  return (
    <div className='HomeBody'>
      <MyHeader ></MyHeader>
      <First></First>
    </div>
    
  )
}

export default Home