import React, {useState} from "react";
import { Button, Col, Row } from "reactstrap";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import {List} from "../../productlist";
import { addToCart } from '../../../../redux/actions/action';
import Bag from "../../../../Images/Icon/tuido-fixed.png";
import Heart from "../../../../Images/Icon/heart.png";
import Share from "../../../../Images/Icon/ab1.png";
import {Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Eye from "../../../../Images/Icon/eye.png";

import { connect } from 'react-redux';

function List({
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
    
    const listdata = List.map((item) => {
        return (
            <COL md= "3" key={item.id}>
                    <div style={{backgroundColor:"#F4F4F6",marginBottom:"40px",marginTop:"70px", position: "relative"}}>
                    <img src ={item.img}  onMouseEnter={e => setActiveIndex(
                        activeIndex === item.id ? null : item.id)}
                    />
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
            </COL>
        );
    });
  return (
   
    <Row > 
       {listdata}
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

export default connect(mapStateToProps,mapDispatchToProps)(List)
