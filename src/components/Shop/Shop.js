import React, { useEffect, useState } from 'react';
import Cart from './../Cart/Cart';
import Products from './../Products/Products';
import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
      const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])

    const addToCartHandle = (singleItem)=>{
        const doubleItemFilter = cart.find(item =>item.id===singleItem.id);
        if (doubleItemFilter) {
            return alert(" Unable to add Duplicate items, Try another new one ");
            
        }
        const newCart = [...cart,singleItem];
        if(newCart) {
            if (newCart.length <=4) {
                 setCart(newCart );
                return;
            }
            return alert(" You Added Your Maximum Items");
        }
    }

    const deleteItems =(cart,index)=>{
        const newCart = cart.filter((item,i) => i != index);
        setCart(newCart);
    }
    
    const chooseOneCartHandle =(cart)=>{
        let randomItem = Math.floor((Math.random() *3));
        if (cart.length<2) {
            return;
        }
        let chooseOne = cart.find((item,index) => index===randomItem);
        const newCart = [chooseOne];
        setCart(newCart);
        return;
    }

    const chooseAgainHandle =()=>{
        const newCart = [];
        setCart(newCart);
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
                <Cart 
                chooseOneCartHandle={chooseOneCartHandle} 
                chooseAgainHandle={chooseAgainHandle}
                deleteItems={deleteItems}
                cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;