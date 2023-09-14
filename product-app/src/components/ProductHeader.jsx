import React from 'react'
import { Link } from 'react-router-dom'

const ProductHeader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#"><b>Products</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link"  to="/">Add Product</Link>
                            <Link class="nav-link" to="/search">Search Product</Link>
                            <Link className="nav-link" to="/view">View Product</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ProductHeader