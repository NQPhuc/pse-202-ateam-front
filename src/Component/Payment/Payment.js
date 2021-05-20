import React, {Component} from 'react';
// import {
//     MDBContainer,
//     MDBBtn,
//     MDBModal,
//     MDBModalBody,
//     MDBModalHeader,
//     MDBModalFooter,
//     MDBInput,
//     MDBCol,
//     MDBRow,
// } from 'mdbreact';
//
// const PaymentMethod = () => {
//     return (
//         <form className=" mx-3 black-text">
//             <MDBInput label="Full name" icon="user"/>
//             <MDBInput label="Address"/>
//             <MDBInput label="Contact Number"/>
//             <h3 className="mb5"><b>Payment Method</b></h3>
//             <MDBRow className="mb-4">
//                 <MDBCol mb="4">
//                     <img
//                         src="https://d1wl5wkwpkr66u.cloudfront.net/logo-momo.png"
//                         className="img-fluid"
//                         alt="Momo"/>
//                 </MDBCol>
//                 <MDBCol mb="4">
//                     <img
//                         src="https://d1wl5wkwpkr66u.cloudfront.net/logo.png"
//                         className="img-fluid"
//                         alt="COD"/>
//                 </MDBCol>
//                 <MDBCol mb="4">
//                     <img
//                         src="https://d1wl5wkwpkr66u.cloudfront.net/VIETCOMBANK-LOGO.jpg"
//                         className="img-fluid"
//                         alt="VietCombank"/>
//                 </MDBCol>
//             </MDBRow>
//             <MDBRow className="mb-4">
//                 <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
//                 <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
//                 <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
//             </MDBRow>
//         </form>);
// }
//
// class PaymentPopup extends Component {
//     state = {
//         modal: false
//     };
//
//     toggle = () => {
//         this.setState({
//             modal: !this.state.modal
//         });
//     }
//
//     render() {
//         return (
//             <MDBContainer>
//                 <MDBBtn color="info" onClick={this.toggle}>Waiting for implement</MDBBtn>
//                 <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
//                     <MDBModalHeader toggle={this.toggle}> Choose Payment Method</MDBModalHeader>
//                     <MDBModalBody>
//                         <PaymentMethod/>
//                     </MDBModalBody>
//                     <MDBModalFooter className="justify-content-center">
//                         <MDBBtn color="secondary" onClick={this.toggle}>Confirm</MDBBtn>
//                     </MDBModalFooter>
//                 </MDBModal>
//             </MDBContainer>
//         );
//     }
// }
import styles from './payment.module.css';

const PaymentPopup = (props) => {
    let style = styles;

    if (props.displaying) {
        return (
            <div className={style.modal}>
                <button className={styles.btn__closeModal}
                        onClick={() => props.toggle(false)}>&times;</button>
                <img
                    src="https://d1wl5wkwpkr66u.cloudfront.net/nike_logo.png"
                    id="logo"
                    className={styles.modal__logo}
                />
                <h2 className={styles.modal__header}>Ateam</h2>
                <div className={styles.modal__form}>
                    <label>Full Name</label>
                    <input type="text" name="Full name"/>
                    <label>Address</label>
                    <input type="text" name="address"/>
                    <label>Contact Number</label>
                    <input type="text" name="phone"/>
                    <label> Choose Payment Method</label>
                    <div></div>
                    <div className={styles.flex__grid}>
                        <input className={styles.col} type="radio" name="payment_method"/>
                        <input className={styles.col} type="radio" name="payment_method"/>
                        <input className={styles.col} type="radio" name="payment_method"/>
                    </div>
                    <div></div>
                    <div className={styles.flex__grid}>
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/logo-momo.png"
                            className={styles.img}
                            alt="Momo"/>
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/logo.png"
                            className={styles.img}
                            alt="COD"/>
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/VIETCOMBANK-LOGO.jpg"
                            className={styles.img}
                            alt="VietCombank"/>

                    </div>
                    <button className={styles.btn}
                            onClick={() => props.toggle(false)}> Submit
                    </button>
                </div>
            </div>
        );
    } else return null;
}

export default PaymentPopup;