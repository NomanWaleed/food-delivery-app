import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-start">
                    <div className="sidebar-head">
                        <Link to="/dashboard" className="logo-wrapper" title="Home">
                            <span className="sr-only">Home</span>
                            <span className="icon logo" aria-hidden="true"></span>
                            <div className="logo-text">
                                <span className="logo-title">Food Delivery App</span>
                                <span className="logo-subtitle">Dashboard</span>
                            </div>

                        </Link>
                        <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
                            <span className="sr-only">Toggle menu</span>
                            <span className="icon menu-toggle" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="sidebar-body">
                        <ul className="sidebar-body-menu">
                            <li>
                                <Link to="/admin/dashboard"><span className="icon home" aria-hidden="true"></span>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/admin/add-dishes"><span className="icon home" aria-hidden="true"></span>Add Dishes</Link>
                            </li>
                            <li>
                                <Link to="/admin/accepted"><span className="icon home" aria-hidden="true"></span>Accepted</Link>
                            </li>
                            <li>
                                <Link to="/admin/pending"><span className="icon home" aria-hidden="true"></span>Pending</Link>
                            </li>
                            <li>
                                <Link to="/admin/canceled"><span className="icon home" aria-hidden="true"></span>Canceled</Link>
                            </li>
                            <li>
                                <Link to="/"><span className="icon home" aria-hidden="true"></span>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-footer">
                    {/* <a href="#" className="sidebar-user">
                        <span className="sidebar-user-img">
                            <picture>
                                <source srcset="./images/noman.jpg" type="image/jpg" />
                                <img src="./images/noman.jpg" alt="User name" />
                            </picture>
                        </span>
                        <div className="sidebar-user-info">
                            <span className="sidebar-user__title">Noman Waleed</span>
                            <span className="sidebar-user__subtitle">Web Developer</span>
                        </div>
                    </a> */}
                </div>
            </aside>
        </>
    )
}

export default Sidebar
