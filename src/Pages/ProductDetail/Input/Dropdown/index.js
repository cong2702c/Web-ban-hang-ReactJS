import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const Dropdown = styled.button`
    width: 100px;
    height: 38px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
`;

const P = styled.p`
    width: 52px;
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

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{marginBottom: '20px'}}>
        <P>SIZE: </P>
        <DropdownToggle style={{width: '100px',height: '38px', border: '1px', boxSizing: 'border-box', borderRadius: '4px', backgroundColor: '#C4C4C4'}} caret>
              S
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>S</DropdownItem>
          <DropdownItem>M</DropdownItem>
          <DropdownItem>L</DropdownItem>
          <DropdownItem>XL</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default Example;