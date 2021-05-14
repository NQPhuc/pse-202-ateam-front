import React from 'react'
import Products from '../Component/Products'
import giay1 from '../img/giay1.png'
import giay2 from '../img/giay2.jpg'
import giay3 from '../img/giay3.png'
import giay4 from '../img/giay4.jpg'
// import giay5 from '../img/giay5.jpg'

const products = [
    {id: 1,name:'Yezzy', description:'Running shoes', price: '300$', img:giay1 },
    {id: 2,name:'Yezzy v2', description:'Fashion shoes', price: '100$', img:giay2},
    {id: 3,name:'Nike', description:'Running shoes', price: '50$', img:giay3},
    {id: 4,name:'ekiN', description:'Basketball shoes', price: '80$', img:giay4},
    // {id: 5,name:'YzzeY', description:'Scoccer shoes', price: '10$', img:giay5},
];
const cart = [
    {id: 'cart_1', total_items: 0}
]
const HomePage = (props) =>{
    const addToCartHandler = (productID) =>{
        console.log(productID)
    }
    return (
        <div  style={{ marginBottom: "50px"}}> 
            <Products products={products} onAddToCart={addToCartHandler}/>
        </div>
    );
}
export default HomePage