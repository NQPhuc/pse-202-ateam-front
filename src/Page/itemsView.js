import React from 'react';
class ItemView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="section-title text-center">
                    <h1>welcome here</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="content-info">
                            <div class="shoebrand-name">
                                <div>
                                    <h1 class="brand">NIKE SHOSE</h1>
                                </div>
                                <h3 class="small">Men's SPORT Shose</h3>
                            </div>
                            <div class="content-detail">
                                <h3 class="title">Product Information</h3>
                                <p class="content-in">The Nike Edge 270 take the look of retro basketball and puts it through a
                        modern lenssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            </div>
                            <div class="colors-fill">
                                <h3 class="title">Colors</h3>
                                <div class="Colors">
                                    <span class="color active" primary="#444" color="black"></span>
                                    <span class="color" primary="#29b864" color="green"></span>
                                    <span class="color" primary="#ff5521" color="orange"></span>
                                    <span class="color" primary="#2175f5" color="blue"></span>
                                    <span class="color" primary="#f84848" color="red"></span>
                                </div>
                            </div>
                            <div class="size-ofproduct">
                                <h3 class="title">Size</h3>
                                <div class="sizes">
                                    <span class="size active">8</span>
                                    <span class="size">8.5</span>
                                    <span class="size">9</span>
                                    <span class="size">8.5</span>
                                    <span class="size">10</span>
                                    <span class="size">10.5</span>
                                    <span class="size">11</span>
                                    <span class="size">11.5</span>
                                    <span class="size">12</span>
                                    <span class="size">12.5</span>
                                </div>
                            </div>
                            <div class="price-shoe">
                                <a href="" class="price-of"><i class="fas fa-shopping-cart"></i>Add to cart</a>
                                <div class="share">
                                    <span>share</span>
                                </div>
                                <div class="price">
                                    <h1>&dollar;95.97</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-cart">
                        <div class="shoebg">
                            <div class="bgcolors">
                                <div class="bgcolor second" color="black"></div>
                                <div class="bgcolor" color="grean"></div>
                                <div class="bgcolor" color="orange"></div>
                                <div class="bgcolor" color="blue"></div>
                                <div class="bgcolor" color="red"></div>
                            </div>

                            <img id="featured" src="./images/black.png" alt="" class="shoe showing" color="black"></img>
                            <img src="./images/green.png" alt="" class="shoe showing" color="green"></img>
                            <img src="./images/orange.png" alt="" class="shoe showing" color="orange"></img>
                            <img src="./images/blue.png" alt="" class="shoe showing" color="blue"></img>
                            <img src="./images/red.png" alt="" class="shoe showing" color="red"></img>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
<script src="./product.js"></script>
export default ItemView;