import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import './Products.css';

const Products = ({itemData,addToCartHandle}) => {
    const {name,img,price,seller,category,ratings}=itemData;

    return (
        <div className='product_item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Seller : {seller}</p>
            <p>Category : {category}</p>
            <p>Ratings : {ratings}</p>
            <div className='card_footer'>
                <h3>${price}</h3>
                <button onClick={()=>{addToCartHandle(itemData)}}>Add to cart   &nbsp; <HiOutlineShoppingCart/></button>
            </div>
        </div>
    );
};

export default Products;