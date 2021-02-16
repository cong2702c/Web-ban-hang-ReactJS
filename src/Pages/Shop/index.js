import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "./Main";
import Title from "../ProductDetail/Title";

function ProductList(props) {
    return (
        <div>
            <Header />
            <Title />
            <Main />
            <Footer />
        </div>
    );
}

export default ProductList;