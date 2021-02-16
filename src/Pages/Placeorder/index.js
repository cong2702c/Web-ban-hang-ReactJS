import React from 'react';
import { Container } from "reactstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function index(props) {
    return (
        <div>
            <Header />
            <Container>
                <br />
                <h2>
                    Đặt hàng thành công!!!
                </h2>
                
            </Container>
            <Footer />
        </div>
    );
}

export default index;