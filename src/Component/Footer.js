import React, {Component} from 'react';
import footerIMG from '../img/footer.png';

export default class Footer extends Component {

    constructor(props) {
        super(props)
        }

    render() {
        return (
            <footer>
                <img src={footerIMG} className="TempFooterIMG" alt="logo" />
            </footer>
        );
    }

}