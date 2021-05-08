import React from 'react';
import './ProductView.css';
import data from '../testData/data';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product-view">
                <ul className="products">
                    {
                        data.products.map(product =>
                            <li>
                                <div className="product">
                                    <img className="product-image" src={product.image} alt="" />
                                    <div className="product-name">
                                        <a href={product.image}>{product.name}</a>
                                    </div>
                                    <div className="product-price">Price: {product.price}</div>
                                    <div className="product-size">Size: {product.size} (VN)</div>
                                    <div className="product-rating">Rating: {product.rating}</div>
                                </div>
                                <button className="square" onClick={() => alert('added to cart')}>Add to cart</button>
                            </li>)
                    }
                </ul>
            </div >
        );
    }
}

export default ProductView;
