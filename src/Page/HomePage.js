import React from 'react'
import Products from '../Component/Products'
const HomePage = (props) =>{
    const addToCartHandler = (productID) =>{
        console.log(productID)
    }
    return (
        <div  style={{ marginBottom: "50px"}}> 
            <Products onAddToCart={addToCartHandler}/>
        </div>
    );
}
export default HomePage