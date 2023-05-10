import React from "react";

function Product ( {bannerText, image, description, price} ) {
    return (
        <article>
            <span> {bannerText} </span>
            <img src={image} alt={description}/>
            <p>{description}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;