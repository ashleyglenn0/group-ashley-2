import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateNewWatchListForm from './components/CreateNewWatchList'
import DisplayAllWatchLists from './components/ViewWatchLists'
import MovieApiData from './components/MovieApiData'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateNewWatchListForm />
      <DisplayAllWatchLists />
  <MovieApiData />
    </>

  )
}

export default App
