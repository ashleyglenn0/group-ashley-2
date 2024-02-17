import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateNewWatchListForm from './components/CreateNewWatchList'
import DisplayAllWatchLists from './components/ViewWatchLists'
import MovieApiData from './components/MovieApiData'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UpdateMovieFeed from './components/UpdateMovieFeed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateNewWatchListForm />
      <DisplayAllWatchLists />
      <Router>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<UpdateMovieFeed />} />
    </Routes>
  </div>
</Router>
    </>

  )
}

export default App
