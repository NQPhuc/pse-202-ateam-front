import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';
import './itemsView.css';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';

import * as http from '../services'; //import these to call API

class ItemView extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    product:[],    
  };

  componentDidMount() {
    console.log(this.props.location);
    if (this.props.pid) {
      http.ProductService.getProduct(this.props.pid).then((value) => {
        if (value) {
          this.setState({ product: value });
        }
      });
    }
    //const {index} = this.state;
    //this.myRef.current.children[index].className = "active";
  }

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  render() {
    const product = this.state.product;
    return (
      <div className="app">
        <div className="details" key={product._id}>
          <div className="big-img">
            <img src={product.image} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{product.Name}</h2>
              <span>${product.Price}</span>
            </div>
            {/* <Colors colors={product.Color} /> */}
            <p>{product.Size}</p>
            <p>{product.Color}</p>
            {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  };
}

export default ItemView;
