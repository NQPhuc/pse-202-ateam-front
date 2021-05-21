import React from 'react'
import Products from '../Component/Products'
const HomePage = (props) =>{

    return (
        <div style={{ marginBottom: "50px"}}> 
            <Products totalCartItems={props.totalCartItems} displayTotalCartItems={props.displayTotalCartItems}/>
        </div>
    );
}
export default HomePage