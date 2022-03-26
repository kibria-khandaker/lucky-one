import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Cart.css';

const Cart = ({cart,chooseOneCartHandle,chooseone,chooseAgainHandle}) => {
// console.log(chooseone);
    return (
        <div className='cart_item'>
            <h3>Select Your Painting</h3>  
            <p>Total: items: {cart.length}</p>
            
            <div id='full_cart_item'>
                <div id='cart_items_list'>
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
                </div>
                <div  className='add_to_cart_single_item ' id='randomDiv'>
                    <div className='img_name'>
                        <span>
                            <img src={chooseone?.img ?? 'try again'} alt="" />
                        </span>                    
                        <p>{chooseone?.name ?? 'try again'}</p>
                    </div>
                </div> 
            </div>   
                    
            <div className='chooseBtn'>
                <button onClick={()=>{chooseOneCartHandle(cart)}}>Choose 1 for me</button>
                <button onClick={()=>{chooseAgainHandle(cart)}} >Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;