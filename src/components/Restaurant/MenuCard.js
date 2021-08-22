import React, { useState } from 'react'
import MenuListAPI from './MenuListAPI';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MenuCard = () => {
    const [data, setData] = useState(MenuListAPI);
    const [menuItem, setMenuItem] = useState(data);

    return (
        <>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h3><Link to="/">Home</Link> / All Products</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="display-5  heading-ii mb-5 mt-5 ml-0">
                    Menu
                </h1>
                {/* {noProduct()} */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                    {menuItem.map((curElem) => {
                        return (
                            <div className="col" key={curElem.id}>
                                <div className="card h-100 shadow">
                                    <img src={curElem.image} className="card-img-top" alt={curElem.name} />
                                    <div className="card-body">
                                        <h5 className="card-title pb-3">{curElem.name}</h5>
                                        <p className="card-title border-bottom pb-3">Category:  {curElem.category} </p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <span>
                                                    <small>Rs. </small>
                                                    <span className="price" id="price"> {curElem.price}</span>
                                                </span>
                                                <span className="px-5 mt-0 float-end"> <button className="btn btn-light w-100 text-uppercase">Add to Cart </button> </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MenuCard