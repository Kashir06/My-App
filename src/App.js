import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import PeopleList from "./components/People/PeopleList";
import { useStateValue } from "./hooks/StateProvider";

import "./App.css";

function App() {
  const { user } = useStateValue()[0];

  useEffect(() => {
    document.title = "My App";
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <PeopleList />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
