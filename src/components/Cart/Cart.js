import React from 'react';
import './Cart.css';
import {MdDeleteForever} from 'react-icons/md';

const Cart = ({cart,chooseCartHandle}) => {

    return (
        <div className='cart_item'>
            <h3>Select Your Painting</h3>  
            <p>Total: items: {cart.length}</p>
            
            {
                cart.map((item)=>(
                    <div key={item.name} className='add_to_cart_single_item'>
                        
                        <div className='img_name'>
                            <span>
                                <img src={item.img} alt="" />
                            </span>                    
                            <p> {item.name}</p>
                        </div>
                        <MdDeleteForever  className='delete_cart_item'/>
                    </div>
                ))
            }            
            <div className='chooseBtn'>
                <button onClick={chooseCartHandle}>Choose 1 for me</button>
                <button >Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;