import React from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Address from "../../Images/Footer/address.png";
import Phone from "../../Images/Footer/phone.png";
import Mail from "../../Images/Footer/iconphongthu.png";

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

            &:last-of-type{
                margin-left: 5px;
                color: #BC9051;
            }
        }
    }
`;
/*main ContactUs*/
const Col1 = styled(Col)`
    h1 {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
        text-align: start;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        font-variant: small-caps;

        color: #000000;
    }

`;
const Input1 = styled(Input)`
    width: 100%;
    height: 44px;
    margin-bottom: 23px;
    background: #D9D9D9;
    &::placeholder {
        font-style: italic;
    }
`;
const Input2 = styled(Input)`
    width: 100%;
    height: 151px !important;
    background: #D9D9D9;
    margin-top: 10px;
    margin-bottom: 34px;
    &::placeholder {
        font-style: italic;
    }
`;
const Button1 = styled(Button)`
    height: 43px;
    background: #BC9051;
    font-family: Roboto;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #FFF9F9;
    margin-bottom: 75px;

    &:hover {
        background-color: rgba(188, 144, 81, 0.7);
    }
`;

const Col2 = styled(Col)`
    h1 {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
        text-align: start;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        font-variant: small-caps;

        color: #000000;
    }
    p {
        width: 100%;
        left: 975px;
        top: 520px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;

        color: rgba(0, 0, 0, 0.65);
    }
    div:first-of-type {
        display: flex;
        padding-top: 14px;
        border-bottom: 1px solid #BDBDBD;
        >img {
            width: 23px;
            height: 23px;
        }
        >p {
            width: 100%;
            padding-top: 6px;
            padding-left: 4px;
            padding-bottom: 5px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;

            color: rgba(0, 0, 0, 0.65);
        }
    }

    div:nth-of-type(2) {
        display: flex;
        padding-top: 20px;
        padding-bottom: 5px;
        border-bottom: 1px solid #BDBDBD;
        >img {
            width: 16px;
            height: 16px;
        }
        >p {
            width: 100%;
            padding-left: 4px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;

            color: rgba(0, 0, 0, 0.65);
        }
    }

    div:nth-of-type(3) {
        display: flex;
        padding-top: 20px;
        padding-bottom: 10px;
        >img {
            width: 16px;
            height: 16px;
        }
        >p {
            width: 100%;
            padding-left: 4px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;

            color: rgba(0, 0, 0, 0.65);
        }
    }

    h4 {
        width: 100%;
        height: 16px;

        text-transform: uppercase;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        font-variant: small-caps;

        color: #000000;
    }

    h3 {
        width: 100%;
        height: 21px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;

        color: rgba(0, 0, 0, 0.65);
    }
`;

function ContactUs(props) {
    return (
        <div>
            <Header />
            <MainTop>
                <Container>
                    <div>
                        <h1>CONTACT</h1>
                        <div>                 
                            <h3>Home /</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </Container>
            </MainTop>
            <Container>
                <Form>
                    <Row form>
                        <Col1 md={6}>
                            <h1>TELL US YOUR PROJECT</h1>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input1 type="name" name="name" id="exampleName" placeholder="Name *" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input1 type="phone" name="phone" id="examplePhone" placeholder="Phone *" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input1 type="email" name="email" id="exampleEmail" placeholder="Email *" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input1 type="subject" name="subject" id="exampleSubject" placeholder="Subject *" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Input2 type="textarea" name="text" id="exampleText" placeholder="Message *" />
                            </FormGroup>
                            <Button1>SEND MESSAGE</Button1>
                        </Col1>
                        <Col2 md={6}>
                            <h1>CONTACT US</h1>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem 
consuetudium lectorum. Mirum est notare quam littera gothica, quam 
nunc putamus parum claram anteposuerit litterarum formas human.</p>
                            <div>
                                <img src={Address} />
                                <p>214 Nguyễn Lương Bằng Đống Đa Hà Nội</p>
                            </div>
                            <div>
                                <img src={Mail} />
                                <p>example@gmail.com</p>
                            </div>
                            <div>
                                <img src={Phone} />
                                <p>+849845157666</p>
                            </div>
                            <h4>working hours</h4>
                            <h3>Monday – Saturday: 08AM – 22PM</h3>
                        </Col2>
                    </Row>
                </Form>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.459045407022!2d105.8251129142451!3d21.014310793648878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7f38ed7061%3A0xefbe723504900052!2zMjE0IE5ndXnhu4VuIEzGsMahbmcgQuG6sW5nLCBRdWFuZyBUcnVuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1605158080231!5m2!1svi!2s" width="100%" height="479" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
            </Container>
            <Footer />
            
        </div>
    );
}

export default ContactUs;