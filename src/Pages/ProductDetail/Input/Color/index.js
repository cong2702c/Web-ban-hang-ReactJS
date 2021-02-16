import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const P = styled.p`
    width: 70px;
    left: 1071px;
    top: 850px;
    margin-bottom: 0;
    padding-top: 15px;
    margin-right: 15px;
    padding-bottom: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

const DIV = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const P1 = styled.p`
    margin-top: 15px;
    margin-left: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.65);
    display: flex;
`;

const StyleDiv = styled.div`
    width: 99px;
    margin-right: 30px;
    height: 40px;
    left: 1071px;
    top: 957px;
    /* d3 màu text dưới */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
`;

const H1 = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

`;



const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{marginBottom: '20px'}}>
        <P>COLOR: </P>
        <DropdownToggle style={{width: '159px',height: '38px', border: '1px', boxSizing: 'border-box', borderRadius: '4px', backgroundColor: '#C4C4C4'}} caret>
              White
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Red</DropdownItem>
          <DropdownItem>Blue</DropdownItem>
          <DropdownItem>Black</DropdownItem>
          <DropdownItem>Pink</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <DIV>
        <StyleDiv>
          <P1>Compare</P1>
        </StyleDiv>
        <StyleDiv>
          <P1>Wishlist</P1>
        </StyleDiv>
      </DIV>
      <div style={{display: 'flex'}}>
        <H1>TAGS :</H1>
        <p></p>
      </div>
      <hr />
      <div>
        <H1>SHARE PRODUCT:</H1>
        <div></div>
      </div>
    </div>
  );
}

export default Example;