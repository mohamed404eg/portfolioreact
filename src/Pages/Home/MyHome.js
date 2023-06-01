import React from 'react'
import MyHeader from '../Header/MyHeader'
import First from './first/First'
import MyHomeCss from './MyHome.css'
import Quote from './quote/Quote'


function Home() {
  return (
    <div className='HomeBody'>
      <MyHeader ></MyHeader>
      <First></First>
      <Quote></Quote>
    </div>
    
  )
}

export default Home