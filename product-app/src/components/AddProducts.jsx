import React from 'react'
import ProductHeader from './ProductHeader'

const AddProducts = () => {
  return (
    <div>
        <ProductHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Product Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Batch no.</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Brand name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Manufacture date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Expiry date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Product description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Product image</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                        <div className="App col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProducts