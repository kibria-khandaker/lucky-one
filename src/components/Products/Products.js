import React from 'react';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import './Products.css'

const Products = ({itemData}) => {
    const {name,img,price,seller}=itemData;
    return (
        <div className='product_item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Seller : {seller}</p>
            <div className='card_footer'>
                <h2>${price}</h2>
                <button>Add to cart   &nbsp; <HiOutlineShoppingCart/></button>
            </div>
        </div>
    );
};

export default Products;