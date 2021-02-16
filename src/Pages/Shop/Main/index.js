import React from 'react';
import { Container,Row,Col } from "reactstrap";
import MainRight from './MainRight';
import MainLeft from './MainLeft';

function Main(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="3">
                        <MainLeft />
                    </Col>
                    <Col xs="9">
                        <MainRight />
                    </Col>
                </Row>    
            </Container>                
        </div>
    );
}

export default Main;