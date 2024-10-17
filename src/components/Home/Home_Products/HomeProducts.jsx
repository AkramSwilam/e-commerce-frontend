import axios from 'axios'
import { baseUrl } from "../../../config"
import React, { useEffect, useState } from 'react'
import style from "../Home.module.css"
import { Link } from 'react-router-dom'
export default function HomeProducts() {
    const [products, setproducts] = useState([])

    async function getProducts() {
        await axios.get(`${baseUrl}/products`).then((res) => {
            setproducts(res.data.data)

        }).catch((error) => {
            console.log(error);

        })
    }

    useEffect(() => {
        getProducts()
    }, [products])

    return (
        products.length !== 0 ? <div className='row'>
            {
                products.map((product, idx) => (
                    <ProductCard product={product} idx={idx}></ProductCard>
                ))
            }
        </div> : <div style={{ minHeight: '70vh' }} className='d-flex align-items-center justify-content-center'>
            <span class="loader"></span>
        </div>
    )
}



function ProductCard({ product, idx }) {
    return (
        <div className='col-md-3 p-5' key={idx}>
            <Link to={`/product-details/${product._id}`}>
                <img src={product.imageCover} className='w-100' alt="" />
            </Link>
            <h5 className='text-success'>{product.category.name}</h5>
            <Link to={`/product-details/${product._id}`}
                className='text-decoration-none'>
                <h5 className='mb-1 fw-semibold text-decoration-none'>{product.title}</h5>
            </Link>
            <div className='d-flex justify-content-between'>
                <span>{product.price} EGP</span>
                <span style={{ color: '#ffc000' }}>
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`fa fa-star`}
                            style={i<product.ratingsAverage?{color:'#ffc000'}:{color:'lightgray'}} // Solid star if i < rating, otherwise outlined star
                        />
                    ))}
                    <span style={{ marginLeft: '5px' }}>{product.ratingsAverage}</span>
                </span>

            </div>
            <button className='btn btn-primary px-4 mt-2'>Add To Cart</button>
        </div>
    )
}



