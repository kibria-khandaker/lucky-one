import React, { useEffect, useState } from 'react';
import Cart from './../Cart/Cart';
import Products from './../Products/Products';
import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);



    useEffect(()=>{
      const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])

    const addToCartHandle = (singleItem)=>{
        const newCart = [...cart,singleItem];
        setCart(newCart );
        // console.log(singleItem);
    }

    return (
        <div className='shop_container'>
            <div className='items_section'>
                {
                    items.map((item)=>(
                        <Products 
                        key={item.id} 
                        itemData={item} 
                        addToCartHandle={addToCartHandle} />
                    ))
                }
            </div>
            <div className='cart_section'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;