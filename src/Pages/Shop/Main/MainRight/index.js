import React, {useState} from "react";
import { Button, Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import {List} from "../MainRight/productlist";
import { addToCart } from '../../../../redux/actions/action';
import { Link } from "react-router-dom";
import Bag from "../../../../Images/Icon/tuido-fixed.png";
import Heart from "../../../../Images/Icon/heart.png";
import Share from "../../../../Images/Icon/ab1.png";
import Eye from "../../../../Images/Icon/eye.png";

import {Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { connect } from 'react-redux';

const Icon = styled.div`
    position: absolute;
    display: grid;
    top: 0;
    right: 10px;
        button{
            margin-top: 15px;
            width: 25px;
            height: 21px;
            background-repeat: no-repeat;
            background-size: auto;
            background-position: center;
            border-radius: 0;
            background-color: transparent;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: transparent;
            // &:hover{
            //     background-color: transparent;
            //     border-color: transparent;
            // }
            &:focus {
                color: #fff;
                background-color: transparent;
                border-color: transparent;
            }
            &:active{
                border: none;
                background-color: transparent;
                border-color: transparent;
            }
        }
   
`;
const CustomCol = styled(Col)`
    h3{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        margin-top: 30px;
    }
   
    p{
        margin-top: 25px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 33px;
        line-height: 39px;
        font-variant: small-caps;
        color: #33D6FA;
        span {
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;
            text-decoration-line: line-through;
            color: rgba(0, 0, 0, 0.49);
            padding-right: 25px;
        }
    }
`;

function MainRight({
    items,
    addToCart
}) {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (id) =>{
        addToCart(id);

    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggle = () => {
        setModalIsOpen(!modalIsOpen);
    }
    
    const listData = List.map((item) => {
        return (
            <CustomCol md= "3" key={item.id}>
                <div style={{backgroundColor:"#F4F4F6",marginBottom:"40px",marginTop:"70px", position: "relative", height: '296px'}}>
                <Link to="/Shop/ProductDetail">
                    <img style={{width: '100%', marginTop: '90px'}} src ={item.img}  onMouseEnter={e => setActiveIndex(
                        activeIndex === item.id ? null : item.id)}
                    />
                </Link>
                        <Icon onMouseEnter={e => setActiveIndex(item.id)} style={{display: activeIndex === item.id ? "grid" : "none"}}>
                    <Button style={{backgroundImage: `url(${Eye})`}} onClick={toggle} key={item.id}></Button>
                    <Modal isOpen={modalIsOpen} key={item.id}>
                                <ModalHeader >Infor</ModalHeader >
                                <ModalBody>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                    <img src ={item.img}/>
                                </ModalBody>
                            <div>
                                <Button onClick={() => setModalIsOpen(false)}>Close</Button>
                            </div>
                        </Modal>
                    <Button onClick={()=>{handleClick(item.id)}}  style={{backgroundImage: `url(${Bag})`,backgroundSize: "contain"}} ></Button>
                    <Button style={{backgroundImage: `url(${Heart})`}}></Button>
                    <Button style={{backgroundImage: `url(${Share})`,backgroundRepeat: "repeat", backgroundSize: "cover"}}></Button>
                        </Icon>
            </div>
            <StarRatings
                rating={item.rate}
                starDimension="30px"
                starSpacing="0"
                starRatedColor="rgb(255, 216, 49)"
                starEmptyColor="rgb(125, 107, 107)"
            />
            <h3>{item.name} </h3>
            <p><span>${item.price}</span> ${item.discount_price}</p>
          
            </CustomCol>

        );
    });
  return (
   
    <Row > 
       {listData}
    </Row>

  );
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainRight)