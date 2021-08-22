import React from 'react'

const Pending = () => {
    return (
        <>
            <div className="table-responsive dashboard-data">
            <h1 className="text-center mb-5">List of Pending Orders</h1>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Provider</td>
                            <td>Quantity</td>
                            <td>Location</td>
                            <td>Total Bill</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Title of Item</td>
                            <td>Name of Restaurant</td>
                            <td>1</td>
                            <td>Lal Mil Chowk Faisalabad</td>
                            <td>4000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pending
