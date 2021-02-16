import React from 'react';
import { Container, Col, Row } from "reactstrap";



function index(props) {
    return (
        <div>
        <Container>
            <h2>TOP INTERESTING</h2>
            <div>
                <ul style={{display: "flex", justifyContent: "flex-end"}}>
                    <li style={{marginLeft: "30px"}}>NEW ARIVALS</li>
                    <li style={{marginLeft: "30px"}}>FEATURED</li>
                    <li style={{marginLeft: "30px"}}>ON SALE</li>
                </ul>
            </div>
        </Container>
        </div>
    );
}

export default index;