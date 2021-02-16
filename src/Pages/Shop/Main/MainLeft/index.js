import React, { Component, useState } from "react";
import styled from "styled-components";
import { Container } from 'reactstrap'
import StarRatings from "react-star-ratings";
import Leftimg1 from "../MainLeft/Images/leftimg1.png";
import Leftimg2 from "../MainLeft/Images/leftimg2.png";
import Leftimg3 from "../MainLeft/Images/leftimg3.png"

const Span = styled.div``;

const StyleDiv = styled.div`
    display: block;
    margin-top: 30px;
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
    margin-bottom: 30px;
`;

const SListGroupItem = styled.div`
    left: 379px;
    top: 549px;
    display: flex;
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

const P = styled.p`
    width: 80px;
    height: 26px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 14px;
    margin-right: 8px;
    padding-top: 5px;
    padding-left: 5px;
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

const MainLeft = () => {
    return(
        <Container style={{marginTop:'65px'}}>
            <StyleDiv>
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
            </StyleDiv>
            <StyleDiv>
                <H1>COLOR</H1>
                <SListGroupItem className="justify-content-between">Gold<Span pill>(5)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">Green<Span pill>(1)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">Blue<Span pill>(2)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">White<Span pill>(4)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">Red<Span pill>(6)</Span></SListGroupItem>                  
            </StyleDiv>
            <StyleDiv>
                <H1>SIZE</H1>
                <SListGroupItem className="justify-content-between">L<Span pill>(6)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">M<Span pill>(2)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">S<Span pill>(5)</Span></SListGroupItem>
                <hr />
                <SListGroupItem className="justify-content-between">XL<Span pill>(1)</Span></SListGroupItem>
            </StyleDiv>
            <StyleDiv>
                <StyleH1>TOP RATED PRODUCT</StyleH1>
                <DIV>
                    <img src={Leftimg1} />
                    <div>
                        <StarRatings 
                            starDimension="20px"
                            starSpacing="0"
                            starRatedColor="rgb(255, 216, 49)"
                            starEmptyColor="rgb(125, 107, 107)"
                        />
                        <p>$320.00</p>
                    </div>
                </DIV>
                <DIV>
                    <img src={Leftimg2} />
                    <div>
                        <StarRatings 
                            starDimension="20px"
                            starSpacing="0"
                            starRatedColor="rgb(255, 216, 49)"
                            starEmptyColor="rgb(125, 107, 107)"
                        />
                        <p>$390.00</p>
                    </div>
                </DIV>
                <DIV>
                    <img src={Leftimg3} />
                    <div>
                        <StarRatings 
                            starDimension="20px"
                            starSpacing="0"
                            starRatedColor="rgb(255, 216, 49)"
                            starEmptyColor="rgb(125, 107, 107)"
                        />
                        <p>$400.00</p>
                    </div>
                </DIV>
            </StyleDiv>
            <StyleDiv>
                <StyleH1>PRODUCT TAGS</StyleH1>
                <div style={{display: 'flex'}}>
                    <P>Fashion</P>
                    <P>Bags</P>
                    <P>Cosmetic</P>
                </div>
                <div style={{display: 'flex'}}>
                    <P>Flat shoes</P>
                    <P>Eyeshadows</P>
                </div>
                <P>Handbag</P>
            </StyleDiv>                               
    </Container>
    );
}

export default MainLeft;