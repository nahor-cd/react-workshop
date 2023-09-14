import React, { useEffect, useState } from 'react'
import ProductHeader from './ProductHeader'
import axios from 'axios'

const ViewProducts = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                setData(response.data)
            }
        )
    }, [])
    return (
        <div>
            <ProductHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex align-item-stretch">
                                        <div class="card" >
                                            <img height="300px" src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">INR {value.price}</p>
                                                <a href="#" class="btn btn-secondary">Add to cart</a>
                                                <a href="#" class="btn btn-primary">Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts