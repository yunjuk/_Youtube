import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Home from './pages/Today'
import Home from './pages/Developer'
import Home from './pages/Webd'
import Home from './pages/Website'
import Home from './pages/Gsap'
import Home from './pages/Port'
import Home from './pages/Youtube'
import Home from './pages/Channel'
import Home from './pages/Search'
import Home from './pages/Not'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/today' element={<Today/>}/>
        <Route path='/developer' element={<Developer/>}/>
        <Route path='/webd' element={<Webd/>}/>
        <Route path='/website' element={<Website/>}/>
        <Route path='/gsap' element={<Gsap/>}/>
        <Route path='/port' element={<Port/>}/>
        <Route path='/youtube' element={<Youtube/>}/>
        <Route path='/channel/:channelID' element={<Channel/>}/>
        <Route path='/video/:videoID' element={<Video/>}/>
        <Route path='/search/:searchID' element={<Search/>}/>
        <Route path='/*' element={<Not/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App