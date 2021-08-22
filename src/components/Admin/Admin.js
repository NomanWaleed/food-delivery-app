import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from '../components/Dashboard/Sidebar';
import Accepted from '../components/Dashboard/Accepted';
import Pending from '../components/Dashboard/Pending';
import Canceled from '../components/Dashboard/Canceled';
import Dashboard from '../components/Dashboard/Dashboard';
import DishesForm from '../components/Dashboard/DishesForm';
import Footer from '../Footer';

const Admin = () => {
    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/add-dishes">
                        <DishesForm />
                    </Route>
                    <Route path="/admin/accepted">
                        <Accepted />
                    </Route>
                    <Route path="/admin/pending">
                        <Pending />
                    </Route>
                    <Route path="/admin/canceled">
                        <Canceled />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Admin
