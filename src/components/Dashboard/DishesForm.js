import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DishesForm = () => {
    return (
        <>
            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center dashboard-data">
                <div className="card p-2 text-center py-5 shadow">
                    <div className="px-sm-4 mt-3 px-2">
                        <h3 className="mb-3">Add New Item :-)</h3>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Category</option>
                            <option value="1">Chinese</option>
                            <option value="2">Italian</option>
                            <option value="2">French</option>
                        </select>
                        <input className="form-control mt-3" placeholder="Item Title" />
                        <input className="form-control mt-3" placeholder="Item Price" />
                        <div className="form-floating mt-3">
                            <textarea className="form-control" placeholder="Description of the Item..." id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Description</label>
                        </div>
                        <input type="file" className="form-control mt-3" placeholder="Upload Image" />
                        <input type="file" className="form-control mt-3" placeholder="Upload Image" />
                        <input type="file" className="form-control mt-3" placeholder="Upload Image" />
                    </div>
                    <div className="px-5 mt-4"> <button className="btn btn-light w-100 text-uppercase">Submit</button> </div>
                    {/* <div className="px-5">
                        <span className="terms">Already Have an Account?
                            <Link to="/signin" className="text-decoration-none"> Submit </Link>
                            Here
                        </span>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default DishesForm
