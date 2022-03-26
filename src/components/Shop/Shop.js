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
        document.getElementById("cart_items_list").style.display = 'block'
        // document.getElementById("randomDiv").style.display = 'block'
        const newCart = [...cart,singleItem];
        if(newCart) {
            if (newCart.length <=4 ) {
                if (!newCart.find( i => i.name===newCart.name)) {
                    setCart(newCart ) ;
                }
                return;
            }
            return alert(" You Added Your Maximum Items");
        }
    }

    const chooseOneCartHandle =(a)=>{
        document.getElementById("cart_items_list").style.display = 'none'
        document.getElementById("randomDiv").style.display = 'block'
        let x = Math.floor((Math.random() *4));
        if (!isNaN(x)) {
            if (!undefined) {
                let chooseOne = a.map(pro => pro);
                setChooseone(chooseOne[x]);
                return;
            }
        }
    }

    const chooseAgainHandle =(chooseAgain)=>{
        chooseAgain.splice(0, 4)
        document.getElementById("cart_items_list").style.display = 'none'
        document.getElementById("randomDiv").style.display = 'none'
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
                cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;