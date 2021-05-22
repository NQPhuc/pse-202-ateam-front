import React from 'react'
import Products from '../Component/Products'
import * as http from '../services'; //import these to call API

export default class HomePage extends React.Component{


    render(){
    return (
        <div style={{ marginBottom: "50px"}}> 
            <Products/>
        </div>
    );
    }
}