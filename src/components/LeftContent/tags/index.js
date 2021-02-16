import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 32px;
    > div > a {
        padding: 5px;
        background-color: gray;
        border: 1px black solid;
    }
`;
const Title = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 30px;
`;

const Filter = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    margin-bottom: 12px;
`;


function index(props) {
    return (
        <div>
            <Wrapper>
                <Title>
                    product tags
                </Title>
                 
                <div><a href="/">Fashion</ a></div>
                <div><a href="/">Fashion</ a></div>
                <div><a href="/">Fashion</ a></div>
                <div><a href="/">Fashion</ a></div>
                <div><a href="/">Fashion</ a></div>
            </Wrapper>
        </div>
    );
}

export default index;