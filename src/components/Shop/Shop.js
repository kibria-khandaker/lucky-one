import React, { useEffect, useState } from 'react';
import Cart from './../Cart/Cart';
import Products from './../Products/Products';
import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);
    // console.log(cart);
    // let a = 4;
    // let b = 5;
    // let z = (a<b)
    // console.log(z) // //true


    useEffect(()=>{
      const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])

    const addToCartHandle = (singleItem)=>{
        const newCart = [...cart,singleItem];
        if(newCart) {
            if (newCart.length <=4 ) {
                setCart(newCart ) ;
                return;
            }
            return alert(" You Added Your Maximum Items");
        }
        // console.log(singleItem);
    }

const chooseCartHandle =()=>{
    console.log("chooseCartHandle run");
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
                <Cart chooseCartHandle={chooseCartHandle} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;