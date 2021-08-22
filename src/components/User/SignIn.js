import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetUser from '../Firebase/GetUser'

const SignIn = () => {
    
    const[setemail,setpassword, userLogin] = GetUser()
    return (
        <>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h3><Link to="/">Home</Link> / Sign-in </h3>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="card p-2 text-center py-5 shadow">
                    <div className="px-sm-4 mt-3 px-2">
                        <h3 className="mb-3">Sign in To Continue :-)</h3>
                        <input className="form-control mt-3" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
                        <input className="form-control mt-3" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} />
                    </div>
                    <div className="px-5 mt-4"> <button className="btn btn-light w-100 text-uppercase" onClick={userLogin}>Sign-in</button> </div>
                    <div className="px-5">
                        <span className="terms">Don't Have an Account?
                            <Link to="/signup" className="text-decoration-none"> Sign Up </Link>
                            Here
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
