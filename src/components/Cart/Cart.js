import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Cart.css';

const Cart = ({cart,chooseOneCartHandle,chooseAgainHandle,deleteItems}) => {
    return (
        <div className='cart_item'>
            
            <h3>Select Your Painting</h3>  
            <p>Total Selected: {cart.length}</p>
            {
                cart.map((item,index)=>(
                    <div key={item.name} className='add_to_cart_single_item'>
                        <div className='img_name'>
                            <span>
                                <img src={item.img} alt="" />
                            </span>
                            <p> {item.name}</p>
                        </div>
                        <MdDeleteForever onClick={()=>{deleteItems(cart,index)}} className='delete_cart_item'/>
                    </div>
                ))
            } 
                    
            <div className='chooseBtn'>
                <button onClick={()=>{chooseOneCartHandle(cart)}}>Choose 1 for me</button>
                <button onClick={()=>{chooseAgainHandle()}} >Choose Again</button>
            </div>

        </div>
    );
};

export default Cart;