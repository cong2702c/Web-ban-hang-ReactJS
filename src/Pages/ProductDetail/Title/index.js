import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 285px;
    background: rgba(196, 196, 196, 0.65);
`;

const H1 = styled.h1`
    position: absolute;
    width: 94px;
    height: 42px;
    left: 50%;
    top: 195px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #000000;
`;


function Title () {
    return (
        <Wrapper>
                <H1>SHOP</H1>
        </Wrapper>
    );
}

export default Title;