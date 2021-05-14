import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';
import './itemsView.css';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';

class ItemView extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
            "https://sneakernews.com/wp-content/uploads/2017/06/nike-air-force-1-low-university-red-820266-606-01.jpg?w=780&h=550&crop=1",
            "https://sneakerbardetroit.com/wp-content/uploads/2020/09/Nike-Air-Force-1-Black-Orange-CT4683-001-Release-Date.jpg",
            "https://www.sneakerfiles.com/wp-content/uploads/2021/01/nike-air-force-1-low-rose-pink-foam-CU6312-600-release-date-1.jpg",
            "https://cdn.shopify.com/s/files/1/1622/9929/products/Nike_Air_Force_1_07_LV8_Utility_Moss_Green_Gradeschool_2_1024x1024.jpg?v=1552489066"
          ],
        "description": "these are some of the most popular Air Force 1 models in our shop",
        "content": "Designed by Bruce Kilgore in 1982 with the idea of naming an Air Force 1 presidential transport, Air Force 1 quickly became a revolutionary shoe in the sneaker world, which sold out in a record time. Air Force 1 was the first pair of shoes to be integrated with 'air' technology, an airbag in the heel for cushioning and support.The Air Sole was originally designed to be used in basketball, but currently few people wear it for basketball, which is often used for fashion purposes. Air Force 1 has 3 styles: low-mid-top.",
        "price": 95.95,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default ItemView;
