import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateNewWatchListForm from './components/CreateNewWatchList'
import DisplayAllWatchLists from './components/ViewWatchLists'
import MovieApiData from './components/MovieApiData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateNewWatchListForm />
      <DisplayAllWatchLists />
      <Router>
        <div>
        <Navbar />
        <Home />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </Router>
    </>

  )
}

export default App
