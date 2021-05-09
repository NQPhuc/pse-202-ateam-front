import React from 'react';
class ItemView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="section-title text-center">
                    <h1>welcome here</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="content-info">
                            <div className="shoebrand-name">
                                <div>
                                    <h1 className="brand">NIKE SHOSE</h1>
                                </div>
                                <h3 className="small">Men's SPORT Shose</h3>
                            </div>
                            <div className="content-detail">
                                <h3 className="title">Product Information</h3>
                                <p className="content-in">The Nike Edge 270 take the look of retro basketball and puts it through a modern lens</p>
                            </div>
                            <div className="colors-fill">
                                <h3 className="title">Colors</h3>
                                <div className="Colors">
                                    <span className="color active" primary="#444" color="black"></span>
                                    <span className="color" primary="#29b864" color="grean"></span>
                                    <span className="color" primary="#ff5521" color="orange"></span>
                                    <span className="color" primary="#2175f5" color="blue"></span>
                                    <span className="color" primary="#f84848" color="red"></span>
                                </div>
                            </div>
                            <div className="size-ofproduct">
                                <h3 className="title">Size</h3>
                                <div className="Size">
                                    <span className="size active">8</span>
                                    <span className="size">8.5</span>
                                    <span className="size">9</span>
                                    <span className="size">8.5</span>
                                    <span className="size">10</span>
                                    <span className="size">10.5</span>
                                    <span className="size">11</span>
                                    <span className="size">11.5</span>
                                    <span className="size">12</span>
                                    <span className="size">12.5</span>
                                </div>
                            </div>
                            <div className="price-ofshoe">
                                <a href="" className="price-of"><i className="fas fa-shopping-cart"></i>Add to cart</a>
                                <div className="share">
                                    <span>share</span>
                                </div>
                                <div className="price">
                                    <h1>&dollar;95.97</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-cart">
                            <div className="shoe-bg">
                                <div className="bg-colors">
                                    <div className="bg-color" color="black"></div>
                                    <div className="bg-color" color="grean"></div>
                                    <div className="bg-color" color="orange"></div>
                                    <div className="bg-color" color="blue"></div>
                                    <div className="bg-color" color="red"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemView;