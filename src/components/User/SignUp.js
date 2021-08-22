import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import getUser from '../Firebase/GetUser'
const SignUp = () => {

    const[setemail, setpassword, setname, setphone, userSignUp] = getUser();
    
    return (
        <>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h3><Link to="/">Home</Link> / Sign-Up </h3>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="card p-2 text-center py-5 shadow">
                    <div className="px-sm-4 mt-3 px-2">
                        <h3 className="mb-3">Register with Us :-)</h3>
                        {/* <select class="form-select" aria-label="Default select example">
                            <option selected>Sign Up as</option>
                            <option value="1">User</option>
                            <option value="2">Restaurant</option>
                        </select> */}
                        <input className="form-control mt-3" placeholder="Username"  onChange={(e)=>{setname(e.target.value)}} />
                        <input className="form-control mt-3" placeholder="Email"  onChange={(e)=>{setemail(e.target.value)}}  />
                        <input className="form-control mt-3" placeholder="Phone"  onChange={(e)=>{setphone(e.target.value)}} />
                        {/* <input className="form-control mt-3" placeholder="Country" />
                        <input className="form-control mt-3" placeholder="City" /> */}
                        <input className="form-control mt-3" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}  />
                    </div>
                    <div className="px-5 mt-4"> <button className="btn btn-light w-100 text-uppercase" onClick={userSignUp}>Signup</button> </div>
                    <div className="px-5">
                        <span className="terms">Already Have an Account?
                            <Link to="/signin" className="text-decoration-none"> Sign In </Link>
                            Here
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
