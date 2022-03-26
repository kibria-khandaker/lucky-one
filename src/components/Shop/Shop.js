import React, { useEffect, useState } from 'react';
import Cart from './../Cart/Cart';
import Products from './../Products/Products';
import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [chooseone, setChooseone] = useState([]);
    
    useEffect(()=>{
      const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])

    const addToCartHandle = (singleItem)=>{
        // document.getElementById("cart_items_list").style.display = 'block'
        // document.getElementById("randomDiv").style.display = 'block'
        const w = cart.find( i => i.id===singleItem.id);
        // console.log('w',w);
        if (w) {
            return;
            
        }
        const newCart = [...cart,singleItem];
        const ww = newCart.find( i => i.id===singleItem.id);
        // console.log('ww',ww);
        // console.log(singleItem);
        // console.log(newCart);
        if(newCart) {
            if (newCart.length <=4) {
                 setCart(newCart );
                return;
            }
            return alert(" You Added Your Maximum Items");
        }
    }
    const deleteItems =(cart,index)=>{
        console.log(cart);
        // cart.splice(index, 1)
        const newCart = cart.filter((item,i) => i != index);
        console.log(newCart);
        setCart(newCart);
        // console.log('delete', dd, index);
    }
    
    const chooseOneCartHandle =(cart)=>{
        // document.getElementById("cart_items_list").style.display = 'none';
        // document.getElementById("randomDiv").style.display = 'block';
        // newCart.find( i => i.name===newCart.name)
        let x = Math.floor((Math.random() *3));
        if (cart.length<2) {
            return;
        }
        let chooseOne = cart.find((item,index) => index===x);
        console.log(chooseOne);
        const newCart = [chooseOne];
        setCart(newCart);
        // setChooseone(chooseOne[x]);
        return;
    }

    const chooseAgainHandle =()=>{
        const newCart = [];
        setCart(newCart);
        // cart = []
        // chooseAgain.splice(0, 4)
        // document.getElementById("cart_items_list").style.display = 'none'
        // document.getElementById("randomDiv").style.display = 'none'
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
                chooseone={chooseone} 
                deleteItems={deleteItems}
                cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;