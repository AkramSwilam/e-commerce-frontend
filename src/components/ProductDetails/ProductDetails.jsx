/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../config';
import styles from "./ProductDetails.Module.css"

export default function ProductDetails() {
  const [product, setproduct] = useState(null)
  let params = useParams()

  async function getProduct() {
    let p = await axios.get(`${baseUrl}/products/${params.id}`).catch(
      (e) => {
        console.log(e);
      }
    )
    console.log(p);

    setproduct(p.data.data)
    console.log(p.data.data);

    //console.log(product.price);

  }
  useEffect(() => {
    getProduct()
  }, [])
  return <>
    {
      product ? <ProductDetailsComp product={product} similarProducts={[product]}></ProductDetailsComp>
        :
        'loading..'}
  </>
};



 function ProductDetailsComp({ product, similarProducts }) {
  return (
    <div className={`container ${styles.productDetails}`}>
      <div className="row">
        {/* Product Images Section */}
        <div className="col-md-6">
          <div className={styles.imageGallery}>
            {product.images && product.images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className={`img-fluid ${styles.productImage}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-md-6">
          <div className={styles.detailsContainer}>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.productPrice}>${product.price}</p>

            {/* Product Rating */}
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => {
                const fullStarThreshold = i + 1;
                let starType;
                if (product.ratingsAverage >= fullStarThreshold) {
                  starType = 'fa fa-star'; // Full star
                } else if (product.ratingsAverage >= fullStarThreshold - 0.5) {
                  starType = 'fa fa-star-half-o'; // Half star
                } else {
                  starType = 'fa fa-star-o'; // Empty star
                }
                return (
                  <i
                    key={i}
                    className={`${starType} ${styles.starIcon}`}
                  />
                );
              })}
              <span className={styles.ratingText}>
                {product.ratingsAverage} / 5 ({product.ratingsCount} reviews)
              </span>
            </div>

            {/* Product Description */}
            <p className={styles.productDescription}>{product.description}</p>

            {/* Add to Cart and Buy Now Buttons */}
            <div className={styles.actions}>
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-outline-secondary ml-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className={styles.similarProducts}>
        <h3>Similar Products</h3>
        <div className="row">
          {similarProducts.map((product, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className={`card ${styles.similarProductCard}`}>
                <img
                  src={product.image}
                  className={`card-img-top ${styles.similarProductImage}`}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




