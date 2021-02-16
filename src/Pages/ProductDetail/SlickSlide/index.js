import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {Container} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";

import StarRating from "../RatingStar";

import Img1 from "./Images/img1.png";
import Img2 from "./Images/img2.png";
import Img3 from "./Images/img3.png";
import Img4 from "./Images/img4.png";

const Wrapper = styled.div`
  width: 930px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 45px;
  margin-bottom: 30px;
`;

const SlideItem = styled.div`
  width: 190px;
  background-color: rgba(176, 236, 255, 0.54);
  padding: 0 20px;
  img {
    width: 100%;
    height: 225px;
    background-size: cover;
  }
`;

const SlideInfo = styled.div`
  background-color: #fff;
  text-align: left;
  a {
    display: inline-block;
    padding: 15px 12.5px 15px 25px;
    background-color: #ff6600;
    font-size: 16px;
    color: #fff!important;
    border-radius: 999px;
    svg {
      margin-left: 27.5px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

const H2 = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: 85px;
    margin-bottom: 20px;
    color: #000000;
`;

const P = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: center;
`;

const DIV = styled.p`
    display: flex;
`;

const P1 = styled.p`
    margin-right: 30px;
    text-decoration-line: line-through;
    width: 68px;
    height: 21px;
    left: 691px;
    top: 1901px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.5);
`;

const P2 = styled.div`
    width: 68px;
    height: 21px;
    left: 790px;
    top: 1900px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #BC9051;
`;

const StyleDiv = styled.div`
    margin-left: 15px;
`;

const photos = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
  {
    img: Img3,
  },
  {
    img: Img4,
  },
  {
    img: Img1,
  },
];

const slide = photos.map(item => 
  <Container>
    <SlideItem>
      <img src={item.img} />
    </SlideItem>
    <SlideInfo>
          <StyleDiv>
            <StarRating />
          </StyleDiv>
          <P>High heel</P>
          <DIV>
            <P1>$620.00</P1>
            <P2>$530.00</P2>
          </DIV>
      </SlideInfo>
  </Container>
);

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Wrapper>
      <Container>
        <H2 style={{textAlign:'center'}}> RELATED PRODUCT </H2>
        <Slider {...settings}>
          {slide}
        </Slider>
      </Container>
    </Wrapper>
  );
}

export default Slide;