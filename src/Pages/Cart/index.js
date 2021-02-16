import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartItem from "../../components/CartItem"


function Cart() {

    return (
        <div>
            <Header />
            <CartItem />

            <Footer />
        </div>
    );
}


const mapStateToProps = (state)=>{
  return {}
  }
 

export default connect(mapStateToProps,{})(Cart)