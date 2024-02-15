import { React, useState } from "react";
import "./App.css";
import CreateNewWatchListForm from "./components/CreateNewWatchList";
import DisplayAllWatchLists from "./components/ViewWatchLists";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateNewWatchListForm />
      <DisplayAllWatchLists />
      <RegistrationForm />
    </>
  );
}

export default App;
