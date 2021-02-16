import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Styled from "styled-components";



const Pages = (props) => {
  return (
    <Pagination aria-label="Page navigation example" style={{border: '1px solid #BDBDBD', boxSizing: 'border-box', width: '926px', height: '86px'}}>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Pages;