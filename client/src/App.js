import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRouter.js";
import BubblePage from "./components/BubblePage.js"
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
      <div>
        <Link to="/login">Login</Link>
        <Link to="/BubblePages">Bubble Pages</Link>
      </div>      
      <Route  path="/login" component={Login} />
      <PrivateRoute exact path="/BubblePages" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
