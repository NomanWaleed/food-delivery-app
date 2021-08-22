import React from "react";

const Header = () => {
    
    return (
        <>
            <div className="container-fluid header">
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h2 className="heading-i">Welcome to </h2>
                        <h1 className="display-5 mb-5 heading">
                        Food Delivery App
                            <sup className="sup">TM</sup>
                        </h1>
                        <div className="col-lg-6 mx-auto">
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Food You Love"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                        id="button-addon2"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
