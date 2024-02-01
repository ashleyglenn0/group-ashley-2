import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateNewWatchListForm from './components/CreateNewWatchList'
import DisplayAllWatchLists from './components/ViewWatchLists'
import ViewWatchListMediaItemsComponent from './components/ViewWatchListMediaItemsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CreateNewWatchListForm />
      <Router>
        <Routes>
          <Route path="/watchlist/:id" element={<ViewWatchListMediaItemsComponent />} />
          <Route path="/" element={<DisplayAllWatchLists />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
