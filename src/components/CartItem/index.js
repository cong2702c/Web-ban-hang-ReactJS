import React, { useEffect, useState, useReducer } from 'react';
import styled from "styled-components";
import { Table, Container } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { subtractQuantity,addQuantity, removeItem } from '../../redux/actions/action';
import bin from "../../Images/Icon/bin.png";
import Modal from './Modal'

const Table1 = styled(Table)`
    width: 1170px;
    text-align: center;
    margin-top: 60px;
    thead {
        >tr {
            >th {
                font-family: Roboto;
                font-weight: bold;
                font-size: 24px;
                line-height: 28px;
                color: #FFFAFA;
                background: #BC9051;
                border: none;
            }
        }
    }
    tbody {
        tr:last-of-type {
            text-align: left;
            td {
                border: none;
                &:first-of-type input {
                    width: 504px;
                    height: 44px;
                    &::placeholder {
                        width: 168px;
                        height: 21px;
                        font-family: Roboto Condensed;
                        font-style: italic;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 21px;
                        color: rgba(0, 0, 0, 0.3);
                    }
                }
                &:last-of-type {
                    a {
                        padding: 10px 10px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        text-transform: uppercase;
                        text-decoration: none;
                        line-height: 27px;
                        color: #FFFAFA;
                        background-color: #BC9051;
                        &:hover {
                            background-color: rgba(188, 144, 81, 0.7);
                        }
                    }
                }
            }
        }
    }
`;

const Checkout = styled.div`
    background-color: #F4F4F6;
    width: 470px;
    height: 216px;
    margin-left: 705px;
    >p {
        padding-top: 15px;
        padding-bottom: 10px;
        padding-left: 15px;
        text-transform: uppercase;
        font-family: Roboto;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        color: #000000;
        margin-bottom: 0;
        &:last-of-type {
            border-bottom: none;
        }
    }
    >div{
        margin-top: 12px;
        >a{
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 93.5px;
            padding-right: 93.3px;
            text-transform: uppercase;
            font-family: Roboto;
            font-weight: 300;
            font-size: 24px;
            text-decoration: none;
            line-height: 28px;
            color: #FFFAFA;
            background: #BC9051;
            &:hover {
                background-color: rgba(188, 144, 81, 0.7);
            }
        }
    }
`;


const CartItem = ({
    addedData,
    add,
    sub,
    rm
}) => {

    const abc = useReducer(state => state)
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState();
   useEffect(() => {
       if(addedData) {
           setCount(addedData.length)
       }
   }, [addedData])

   const subQuatity=()=>{
    sub(selected.id)
    setModal(false)
   }

const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
      <Container>
        <Table1 bordered>
            <thead>
                <tr>
                    <th colSpan="3">PRODUCT</th>
                    <th colSpan="3">QUANTITY</th>
                </tr>
            </thead>
            <tbody>
                {addedData && addedData.length > 0 && addedData.map(item =>(
                        <tr>
                        <th scope="row">
                            <img src={item.img} style={{width: '136px', height: '159px'}} /></th>
                        <td>{item.name}</td>
                        <td>${item.discount_price}</td>
                        <td> 
                            <button
                                onClick={()=>{
                                    if(item.quantity>1)
                                        sub(item.id)
                                    else
                                    {
                                        setSelected(item)
                                        setModal(true)
                                    }
                                        
                                }
                                }
                                style={{border: 'none', background: '#fff'}}
                            >-</button>  
                                {item.quantity} 
                            <button
                                 onClick={()=>add(item.id)}
                                 style={{border: 'none', background: '#fff'}}
                            >+</button> 
                        </td>
                        <td>${item.discount_price*item.quantity}</td>
                        <td> 
                            <button
                               onClick={()=>rm(item.id)}
                               style={{border: 'none', background: '#fff'}}
                            >
                              <img src={bin} />
                               {item.rm}
                            </button> 
                            </td>
                        </tr>
                ))}
               
                <tr>
                    <td colSpan="3"><input placeholder="Enter Your Coupon Code"></input></td>
                    <td colSpan="3">
                        <div style={{paddingTop: "8px"}}>
                            <a href="#applyCoupon">apply coupon</a>
                            <a href="#updateCart" style={{marginLeft: "100px"}}>update cart</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table1>
        <Checkout>
            <p>cart totals</p>
            <p>sub total</p>
            <p>shipping</p>
            <p>total</p>
            <div><NavLink to="/shop/checkout">proceed to checkout</NavLink></div>
            
        </Checkout>
        <Modal  isVisibleModal={modal} toggle={toggle} subQuatity={subQuatity} selected={selected} />
      </Container>
  );
}



const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedData: state.addedItems
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        add:(id)=>{dispatch(addQuantity(id))},
        sub:(id)=>{dispatch(subtractQuantity(id))},
        rm:(id)=>{dispatch(removeItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)

