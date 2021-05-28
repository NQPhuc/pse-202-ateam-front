import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import React, { useState} from 'react';
const HeaderCartButton = props => {
  
    
    return (<button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
<span>Your Cart: </span>
<span className={classes.badge}>{props.total}</span>
    </button>)
}
export default HeaderCartButton