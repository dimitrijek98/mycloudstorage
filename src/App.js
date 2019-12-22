import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/Auth/Login";
import FileExplorer from "./Components/app/FileExplorer";



function App() {

  return (
    <div className="App">
        <Router>
            <Route exact path="/" render={(props) => (
                <Login  {...props}/>
            )}/>
            <Route exact path="/fileExplorer" render={(props) => (
                <FileExplorer {...props}/>
            )}/>
        </Router>
    </div>
  );
}

export default App;
