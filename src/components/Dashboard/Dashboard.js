import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className="row stat-cards dashboard-data">
                <div className="col-md-6 col-xl-3">
                    <article className="stat-cards-item">
                        <div className="stat-cards-icon primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <div className="stat-cards-info">
                            <p className="stat-cards-info__num">1478 286</p>
                            <p className="stat-cards-info__title">Total Accepted Orders</p>
                            <p className="stat-cards-info__progress">
                                <span className="stat-cards-info__profit success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>4.07%
                                </span>
                                Last month
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-md-6 col-xl-3">
                    <article className="stat-cards-item">
                        <div className="stat-cards-icon warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        </div>
                        <div className="stat-cards-info">
                            <p className="stat-cards-info__num">1478 286</p>
                            <p className="stat-cards-info__title">Total Pending Orders</p>
                            <p className="stat-cards-info__progress">
                                <span className="stat-cards-info__profit success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>0.24%
                                </span>
                                Last month
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-md-6 col-xl-3">
                    <article className="stat-cards-item">
                        <div className="stat-cards-icon purple">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        </div>
                        <div className="stat-cards-info">
                            <p className="stat-cards-info__num">1478 286</p>
                            <p className="stat-cards-info__title">Total Canceled</p>
                            <p className="stat-cards-info__progress">
                                <span className="stat-cards-info__profit danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-down" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>1.64%
                                </span>
                                Last month
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-md-6 col-xl-3">
                    <article className="stat-cards-item">
                        <div className="stat-cards-icon success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-feather" aria-hidden="true"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                        </div>
                        <div className="stat-cards-info">
                            <p className="stat-cards-info__num">1478 286</p>
                            <p className="stat-cards-info__title">Total visits</p>
                            <p className="stat-cards-info__progress">
                                <span className="stat-cards-info__profit warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>0.00%
                                </span>
                                Last month
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Dashboard
