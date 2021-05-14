import React, {Component} from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInput,
    MDBCol,
    MDBRow,
} from 'mdbreact';

const PaymentMethod = () => {
    return (
        <form className=" mx-3 black-text">
            <MDBInput label="Full name" icon="user"/>
            <MDBInput label="Address"/>
            <MDBInput label="Contact Number"/>
            <h3 className="mb5"><b>Payment Method</b></h3>
            <MDBRow className="mb-4">
                <MDBCol mb="4">
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/logo-momo.png"
                        className="img-fluid"
                        alt="Momo"/>
                </MDBCol>
                <MDBCol mb="4">
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/logo.png"
                        className="img-fluid"
                        alt="COD"/>
                </MDBCol>
                <MDBCol mb="4">
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/VIETCOMBANK-LOGO.jpg"
                        className="img-fluid"
                        alt="VietCombank"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
                <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
                <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
                <MDBCol> <MDBInput type="radio" name="payment_method"/> </MDBCol>
            </MDBRow>
        </form>);
}

class PaymentPopup extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn color="info" onClick={this.toggle}>Waiting for implement</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <MDBModalHeader toggle={this.toggle}> Choose Payment Method</MDBModalHeader>
                    <MDBModalBody>
                        <PaymentMethod/>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn color="secondary" onClick={this.toggle}>Confirm</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PaymentPopup;