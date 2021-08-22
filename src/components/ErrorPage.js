import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="container mt-5 mb-5 d-block text-center">
                <h1 style={{ fontSize: 100}}>Error 404</h1>
                <h2>Page Not Found</h2>
                <h3>Return to <Link to="/">Home Page</Link></h3>

                {/* <div className="card p-2 text-center py-5 shadow">
                    <div className="px-sm-4 mt-3 px-2">
                        <h3 className="mb-3">Sign in To Continue :-)</h3>
                        <input className="form-control mt-3" placeholder="Email" />
                        <input className="form-control mt-3" placeholder="Password" />
                    </div>
                    <div className="px-5 mt-4"> <button className="btn btn-light w-100 text-uppercase">Signup</button> </div>
                    <div className="px-5">
                        <span className="terms">Don't Have an Account?
                            <a href="#" className="text-decoration-none"> Sign Up </a>
                            Here
                        </span>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ErrorPage
