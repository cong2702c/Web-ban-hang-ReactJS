import React from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe'
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput, Container } from 'reactstrap';
import { NavLink } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Paypal from "../../Images/CartImg/Paypal.png";
import { faCpanel } from '@fortawesome/free-brands-svg-icons';

const MainTop = styled.div`
    height: 285px;
    left: -1px;
    top: 97px;
    background: rgba(196, 196, 196, 0.65);
    color: #000000;

    >div >div{
        height: 282px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 42px;

    }
    div {
        display: flex;
        font-family: Roboto Condensed;
        >h3{
            font-style: normal;
            font-weight: 300;
            font-size: 22px;
            line-height: 26px;

            &:nth-of-type(2) {
                margin-left: 5px;
            }
            &:last-of-type{
                margin-left: 5px;
                color: #BC9051;
            }
        }
    }
`;

const Container1 = styled(Container)`
    padding-top: 60px;
    >div {
        display: flex;
        width: 100%;
        height: 45px;
        background: #D9D9D9;
        border-top: 4px solid #BC9051;

        >p {
            padding-top: 13px;
            padding-left: 9px;
            height: 14px;
            font-family: Roboto;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            color: #000000;
        }
        >a {
            padding-top: 13px;
            padding-left: 34px;
            height: 14px;
            font-family: Roboto;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            color: #BC9051;
        }
    }
`;

const Col1 = styled(Col)`
    >p {
        width: 100%;
        height: 33px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        border-bottom: 1px solid #BDBDBD;
    }
`;
const Label1 = styled(Label)`
    font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.65);
`;
const Input1 = styled(Input)`
    width: 100%;
    height: 50px;
    background: #D9D9D9;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    &::placeholder {
        font-family: Roboto;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.5);
    }
`;
const Input2 = styled(Input)`
    height: 50px;
    background: #D9D9D9;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    &::placeholder {
        font-family: Roboto;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.5);
    }
`;
const Col2 = styled(Col)`
    >p {
        width: 100%;
        height: 33px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        border-bottom: 1px solid #BDBDBD;
    }
    >div {
        display: flex;
        p{
            width: 300px;
            height: 50px;
            padding-top: 15px;
            font-family: Roboto;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: rgba(0, 0, 0, 0.65);
            background: #D9D9D9;
            border: 1px solid #BDBDBD;
            box-sizing: border-box;
            margin-bottom: 0;
        }
    }
    >div: nth-of-type(6) {
        display: flex;
        >h4 {
            width: 300px;
            height: 100px;
            padding-top: 39px;
            font-family: Roboto;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: rgba(0, 0, 0, 0.65);
            background: #D9D9D9;
            border: 1px solid #BDBDBD;
            box-sizing: border-box;
            margin-bottom: 0;
        }
        >div {
            width: 300px;
            height: 100px;
            padding-top: 30px;
            font-family: Roboto;
            font-size: 18px;
            line-height: 21px;
            color: rgba(0, 0, 0, 0.65);
            background: #D9D9D9;
            border: 1px solid #BDBDBD;
            box-sizing: border-box;
            margin-bottom: 0;
            >div {
                margin-left: 55px;
            }
        }
    }
    >div: last-of-type {
        display: block;
        width: 100%;
        height: 425px;
        background: #D9D9D9;
        >div {
            padding-top: 40px;
            margin-left: 17px;
        }
        >h5 {
            width: 93%;
            height: 50px;
            font-family: Roboto;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            padding-top: 18px;
            padding-left: 8px;
            margin-left: 17px;
            margin-top: 25px;
            color: rgba(0, 0, 0, 0.65);
            background: #BDBDBD;
            border: 1px solid #BDBDBD;
            box-sizing: border-box;
        }
        >div>div{
            margin-bottom: 15px;
        }
        >div>div>a{
            padding: 16px 20px;
            font-family: Roboto;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-decoration: none;
            color: #FFFAFA;
            background: #BC9051;
            border: 1px solid #BDBDBD;
            &:hover {
                background-color: rgb(188, 144, 81, 0.7);
            }
        }
    }
`;

function Checkout(props) {
    return (
        <div>
            <Header />
            <MainTop>
                <Container>
                    <div>
                        <h1>SHOP</h1>
                        <div>                 
                            <h3>Home /</h3>
                            <h3>Shop /</h3>
                            <h3>Checkout</h3>
                        </div>
                    </div>
                </Container>
            </MainTop>
            <Container1>
                <div>
                    <p>RETURNING CUSTOMER?</p>
                    <NavLink to="/login"> CLICK HERE TO LOGIN</NavLink>
                </div>
            </Container1>
            <Container1>
                <div>
                    <p>HAVE A COUPON?</p>
                    <NavLink to="/shop/checkout"> CLICK HERE TO YOUR CODE</NavLink>
                </div>
            </Container1>
            <Container style={{paddingTop: '55px'}}>
                <Form>
                    <Row form>
                        <Col1 md={6}>
                            <p>Billing Details</p>
                            <Row form style={{paddingTop: '15px'}}>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label1 for="exampleFistName">First Name*</Label1>
                                        <Input1 type="text" name="firstname" id="exampleFirstName" placeholder="First Name" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label1 for="exampleLastName">Last Name*</Label1>
                                        <Input1 type="text" name="lastname" id="exampleLastName" placeholder="Last Name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label1 for="exampleEmail">Address</Label1>
                                <Input2 type="email" name="email" id="exampleEmail" placeholder="Email *" />
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">Company Name</Label1>
                                <Input2 type="text" name="companyname" id="exampleCompanyName" placeholder="Company Name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">Country*</Label1>
                                <Input2 type="text" name="companyname" id="exampleCompanyName" placeholder="Country"/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">Street Address*</Label1>
                                <Input2 type="text" name="streetaddress" id="exampleStreetAddress" placeholder="Street address Line 1"/>
                                <Input2 type="text" name="streetaddress" id="exampleStreetAddress" placeholder="Street address Line 2 (Optional)" style={{marginTop: '12px'}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleTownCity">Town / City*</Label1>
                                <Input2 type="text" name="towncity" id="exampleTownCity" placeholder="Town / City"/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">State / Divition</Label1>
                                <Input2 type="text" name="statedivition" id="exampleStateDivition" placeholder="State / Divition"/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">Postcode / ZIP*</Label1>
                                <Input2 type="text" name="postcode" id="examplePostcode" placeholder="Postcode / ZIP*"/>
                            </FormGroup>
                            <FormGroup>
                                <Label1 for="exampleCompanyName">Phone</Label1>
                                <Input2 type="number" name="phone" id="examplePhone" placeholder="Phone"/>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                <Label1 for="exampleCreate" check>Create An Account?</Label1>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                <Label1 for="exampleShip" check>Ship To A Different Address?</Label1>
                            </FormGroup>
                            <FormGroup style={{paddingTop: '35px'}}>
                                <Label1 for="exampleOrderNote">Order Note</Label1>
                                <Input2 type="textarea" name="note" id="exampleNote" placeholder="Notes about your order, e.g. special notes for delivery" style={{height: '112px'}} />
                            </FormGroup>
                        </Col1>
                        <Col2 md={6} style={{paddingLeft: '30px'}}>
                            <p>Your Order Summary</p>
                            <div style={{paddingTop: '45px'}}>
                                <p>Products</p>
                                <p>Total</p>
                            </div>
                            <div>
                                <p>Suscipit Vestibulum × 1</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Ami Vestibulum suscipit × 4</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Vestibulum suscipit × 2</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Sub Total</p>
                                <p></p>
                            </div>
                            <div>
                                <h4>Shipping</h4>
                                <div>
                                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Flat Rate: $70.00" />
                                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Free Shipping" />
                                </div>
                            </div>
                            <div>
                                <p>Total Amount</p>
                                <p>$470</p>
                            </div>
                            <div>
                                <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio1" label="Cash On Delivery" />
                                <h5>Pay with cash upon delivery.</h5>
                                <div style={{paddingTop: '10px'}}>
                                    <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio2" label="Direct Bank Transfer" />
                                    <CustomInput type="radio" id="exampleCustomRadio5" name="customRadio2" label="Pay with Check" />
                                    <CustomInput type="radio" id="exampleCustomRadio6" name="customRadio2" label="Paypal" />
                                </div>
                                <img src={Paypal} style={{marginLeft: '65px'}} />
                                <div style={{paddingTop: '10px'}}>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="I have read and agree to the website terms and conditions." />
                                    <div style={{paddingTop: '10px'}}>
                                        <NavLink to="/shop/checkout/placeorder">PLACE ORDER</NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col2>
                    </Row>
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;

