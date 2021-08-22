import React from 'react'
const RestautantsCard = ({ filteredItem }) => {
    console.log(filteredItem);
    return (
        <>
            <div className="container">
                <h1 className="display-5  heading-ii mb-5 mt-5 ml-0">
                    Restaurants
                </h1>
                {/* {noProduct()} */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
                    {filteredItem.map((curElem) => {
                        return (
                            <div className="col" key={curElem.id}>
                                <div className="card h-100 shadow">
                                    <img src={curElem.image} className="card-img-top" alt={curElem.name} />
                                    <div className="card-body">
                                        <h5 className="card-title border-bottom pb-3">{curElem.name}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <small>Rating</small>
                                                <br />
                                                <span className="price" id="price"> {curElem.rating}</span>
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

export default RestautantsCard