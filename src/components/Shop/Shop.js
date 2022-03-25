import React, { useEffect, useState } from 'react';
import Products from './../Products/Products';
import './Shop.css';
import Cart from './../Cart/Cart';

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
      const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
    // console.log(items);

    const addToCartHandle = (id)=>{
        console.log('addToCart:=', id );
    }

    return (
        <div className='shop_container'>
            <div className='items_section'>
                {
                    items.map((item)=>(
                        <Products key={item.id} itemData={item} addToCartHandle={addToCartHandle} />
                    ))
                }
            </div>
            <div className='cart_section'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;