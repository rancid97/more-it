import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserList from "./components/user-list";
import NavBar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";

const App = () => {
  return (
      <Router>
          <NavBar/>
          <br/>
          <Route path='/' exact component={About}/>
          <Route path='/users' component={UserList}/>
          <Footer/>
      </Router>
  )
}

export default App;
