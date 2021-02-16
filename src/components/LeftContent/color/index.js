import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 32px;
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
                    color
                </Title>

                <Filter>
                    <p>Gold</p>
                    <p>(6)</p>
                </Filter>
                <Filter>
                    <p>Greens</p>
                    <p>(10)</p>
                </Filter>
                <Filter>
                    <p>Blues</p>
                    <p>(22)</p>
                </Filter>
                <Filter>
                    <p>White</p>
                    <p>(4)</p>
                </Filter>
                <Filter>
                    <p>Red</p>
                    <p>(4)</p>
                </Filter>
            </Wrapper>
        </div>
    );
}

export default index;