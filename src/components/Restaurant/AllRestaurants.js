import React, { useState } from 'react'
import RestautantsCard from './RestautantsCard'
import RestaurantList from './RestaunrantListAPI';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AllRestaurants = () => {
    const [data, setData] = useState(RestaurantList);
    const [filteredItem, setFilteredItem] = useState(data);

    return (
        <>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h3><Link to="/">Home</Link> / All Restaurants </h3>
                    </div>
                </div>
            </div>

            <RestautantsCard filteredItem={filteredItem} />
        </>
    )
}

export default AllRestaurants
