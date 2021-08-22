import React, {useState} from 'react'
import Navbar from './Navbar'
import Header from './Header'
import RestautantsCard from './Restaurant/RestautantsCard'
import SignUp from './User/SignUp'
import SignIn from './User/SignIn'
import MenuCard from './Restaurant/MenuCard'
import RestaurantList from './Restaurant/MenuListAPI'
import Footer from './Footer'

const Home = () => {
    const [data, setData] = useState(RestaurantList);
    const [filteredItem, setFilteredItem] = useState(data);
  
    return (
        <>
        <Header />
        <RestautantsCard filteredItem={filteredItem} />
        </>
    )
}

export default Home
