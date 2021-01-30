import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserList from "./components/user-list";
import NavBar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Ratings from "./components/ratings";
import Contact from "./components/contact";
import Service from "./components/service";
import Admin from "./components/admin";
import axios from "axios";

const App = () => {
    const [services, setServices] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                setServices(res.data);
            })
            .catch(err => console.log(err))
    },[])
  return (
      <Router>
          <NavBar services={services}/>
          <br/>
          <Route path='/' exact render={() => <About services={services}/>}/>
          <Route path='/users' component={UserList}/>
          <Route path='/uslugi/:name' render={() => <Service services={services}/>}/>
          <Route path='/opinie' component={Ratings}/>
          <Route path='/kontakt' exact render={() => <Contact services={services}/>}/>
          <Route path='/kontakt/:service' render={() => <Contact services={services}/>}/>
          <Route path='/admin' component={Admin}/>
          <Footer/>
      </Router>
  )
}

export default App;
