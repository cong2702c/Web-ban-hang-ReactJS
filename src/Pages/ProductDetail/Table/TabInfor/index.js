import React, { useState } from "react";
import styled from "styled-components";

const P = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.65);
    width: 870px;
    height: 202px;
    left: 672px;
    top: 1233px;
    padding-top: 39PX;
    padding-left: 11px;
    border: 2px solid #BDBDBD;
    box-sizing: border-box;
    
`;


function TabInfor () {
    return (
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum 
        metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa 
        massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi 
        non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in 
        imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
        ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus</P>
    );
}

export default TabInfor;