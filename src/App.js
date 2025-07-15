import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'


// import Home from './pages/Home'
// import Today from './pages/Today'
// import Developer from './pages/Developer'
// import Webd from './pages/Webd'
// import Website from './pages/Website'
// import Gsap from './pages/Gsap'
// import Port from './pages/Port'
// import Youtube from './pages/Youtube'
// import Channel from './pages/Channel'
// import Video from './pages/Video'
// import Search from './pages/Search'
// import Not from './pages/Not'
const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));
//비동기 작업 



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/developer' element={<Developer />} />
          <Route path='/webd' element={<Webd />} />
          <Route path='/website' element={<Website />} />
          <Route path='/gsap' element={<Gsap />} />
          <Route path='/port' element={<Port />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/channel/:channelID' element={<Channel />} />
          <Route path='/video/:videoID' element={<Video />} />
          <Route path='/search/:searchID' element={<Search />} />
          <Route path='/*' element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App