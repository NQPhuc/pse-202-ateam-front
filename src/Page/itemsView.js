import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';
import './itemsView.css';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';

import {useParams} from 'react-router-dom';

import * as http from '../services'; //import these to call API

class ItemView extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    product: null,    
  };

  componentDidMount() {
    const pid = this.props.match.params.pid;
    if (pid) {
      http.ProductService.getProduct(pid).then((value) => {
        if (value) {
          //console.log(value);
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
    if(product){
      return (
        <div className="app">
          <div className="details" key={product._id}>
            <div className="big-img">
              <img src={"../img/" + product.image} alt="" />
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
    }
    else{
      return <p>No product like that</p>
    }
  };
}

export default ItemView;
