import React from 'react'
import Products from '../Component/Products'
const HomePage = (props) =>{

    console.log(props.setItemViewPID);
    return (
        <div style={{ marginBottom: "50px"}}> 
            <Products setItemViewPID={props.setItemViewPID}/>

        </div>
    );
}
export default HomePage