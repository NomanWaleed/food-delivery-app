import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Header from './components/Header';
import RestautantsCard from './components/Restaurant/RestautantsCard';
// import MenuAPI from './components/menuAPI'
import RestaurantList from './components/Restaurant/RestaunrantListAPI';
import Footer from './components/Footer';
import MenuCard from './components/Restaurant/MenuCard';
import SignUp from './components/User/SignUp';
import SignIn from './components/User/SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import AllRestaurants from './components/Restaurant/AllRestaurants';
// import Admin from './components/Admin/Admin';
const App = () => {

  // const [data, setData] = useState(RestaurantList);
  // const [filteredItem, setFilteredItem] = useState(data);

  return (
    <>
      <Router>
        <Navbar />     
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/menu">
            <MenuCard />
          </Route>
          <Route path="/restaurants">
            <AllRestaurants />
          </Route>
          <Route path="">
            <ErrorPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  )
}

export default App