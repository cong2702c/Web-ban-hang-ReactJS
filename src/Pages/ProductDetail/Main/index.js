import React from "react";
import styled from "styled-components";
import { Container } from 'reactstrap';
import Img from "../Images/img1.png";
import StartRating from "../RatingStar";
import SelectPage from "../Input";
import Example from "../Input/Dropdown";
import Color from "../Input/Color";
import Tab from "../Table";
import Slide from "../SlickSlide";
import StarRating from "../RatingStar";

import Leftimg1 from "../Images/leftimg1.png";
import Leftimg2 from "../Images/leftimg2.png";
import Leftimg3 from "../Images/leftimg3.png";

import MidImg1 from "../Images/1.jpg"
import MidImg2 from "../Images/1.jpg"
import MidImg3 from "../Images/1.jpg"
import MidImg4 from "../Images/1.jpg"


const SListGroup = styled.div`
    width: 210px;
`;

const H1 = styled.h1`
    width: 107px;
    height: 21px;
    left: 208px;
    top: 182px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 50px;
`;

const H2 = styled.h2`
    width: 400px;
    height: 21px;
    left: 1070px;
    top: 452px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: #000000;
    margin-bottom: 40px;
`;

const SListGroupItem = styled.div`
    left: 379px;
    top: 549px;
    display: flex;
`;

const Wrapper = styled.div`
    display: fixed;
    margin-top:60px;
`;

const Span = styled.div`
    
`;

const Bgimages = styled.div`
    width: 370px;
    height: 520px;
    background: rgba(176, 236, 255, 0.54);
    margin-left: 75px;
    margin-right: 30px;
    margin-bottom: 30px;
`;

const StyleDiv = styled.div`
    width: 397px;
    height: 397px;
    margin-top: 130px;
    margin-bottom: 30px;
`;

const A = styled.a`
    color: #EB5757;
    margin-bottom: 20px;
`;

const P = styled.p`
    color: #BC9051;
    margin-top: 20px;
`;

const P1 = styled.p`
    width: 474px;
    height: 105px;
    left: 1070px;
    top: 628px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.65);
`;

const MainRight = styled.div`
    
`;

const Product = styled.div`
    display: flex;
`;

const StyleTab = styled.div`
    margin-left: 75px;
    margin-top: 90px;
`;

const StyleH1 = styled.h1`
    width: 200px;
    height: 21px;
    left: 384px;
    top: 827px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const DIV = styled.div`
    display: flex;
    width: 219px;
    height: 74px;
    left: 375px;
    top: 899px;
    margin-bottom: 37px;
    > img {
        width: 88px;
        height: 88px;
        left: 7px;
        top: 5px;
        background-color: #F4F4F6;
        margin-right: 10px;
    }
    p {
        width: 68px;
        height: 21px;
        left: 478px;
        top: 1172px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #BC9051;
    }
`;

const StDiv = styled.div`
    background-color: rgba(142, 216, 226, 0.53);
    width: 70px;
    height: 88px;
    left: 670px;
    top: 992px;
    & select {
        display: block;
    }
`;

const Main = (props) => {
    return(
        <Container>
            <Wrapper>
                <SListGroup>
                    <H1>CATEGORIES</H1>
                    <SListGroupItem className="justify-content-between">Cosmetic<Span pill>(4)</Span></SListGroupItem>
                    <hr />
                    <SListGroupItem className="justify-content-between">Bags<Span pill>(2)</Span></SListGroupItem>
                    <hr />
                    <SListGroupItem className="justify-content-between">Shoes<Span pill>(6)</Span></SListGroupItem>
                    <hr />
                    <SListGroupItem className="justify-content-between">Accessories<Span pill>(1)</Span></SListGroupItem>
                    <hr />
                    <SListGroupItem className="justify-content-between">Fashion<Span pill>(5)</Span></SListGroupItem>
                    <hr />
                    <div>
                        <StyleH1>TOP RATED PRODUCT</StyleH1>
                        <DIV>
                            <img src={Leftimg1} />
                            <div>
                                <StarRating />
                                <p>$320.00</p>
                            </div>
                        </DIV>
                        <DIV>
                            <img src={Leftimg2} />
                            <div>
                                <StarRating />
                                <p>$390.00</p>
                            </div>
                        </DIV>
                        <DIV>
                            <img src={Leftimg3} />
                            <div>
                                <StarRating />
                                <p>$400.00</p>
                            </div>
                        </DIV>
                    </div>
                </SListGroup>              
                <MainRight>
                    <Product>
                        <Bgimages>
                            <StyleDiv>
                                <img id="productImg" src={Img}/>
                            </StyleDiv>
                            <div style={{display: 'flex'}}>
                                <StDiv className='small-img' style={{marginRight: '30px'}}><img src={MidImg1} /></StDiv>
                                <StDiv className='small-img' style={{marginRight: '30px'}}><img src={MidImg2} /></StDiv>
                                <StDiv className='small-img' style={{marginRight: '30px'}}><img src={MidImg3} /></StDiv>
                                <StDiv className='small-img' style={{marginRight: '30px'}}><img src={MidImg4} /></StDiv>
                            </div>
                        </Bgimages>
                        <div>
                            <H2>Ornare Sed Consequat</H2>
                            <StartRating />
                            <A href="">1 review(s)</A>
                            <P>$530.00</P>
                            <P1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et 
                            dolore magna aliquyam erat, sed diam voluptua. Phasellus 
                            id nisi quis justo tempus mollis sed et dui. In hac habitasse 
                            platea dictumst.
                            </P1>
                            <SelectPage />
                            <Example />
                            <Color />
                        </div>
                    </Product>
                    <StyleTab>
                        <Tab />
                    </StyleTab>
                    <Slide />
                </MainRight>
            </Wrapper>
        </Container>
    );
}


export default Main;