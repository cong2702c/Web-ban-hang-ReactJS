import React from "react";
import List from "./List";


export default function Product() {
    return (
      <Wrapper>
        <Wrap>
            <div>
              <List />
            </div>
            <div>
              <List />
            </div>
            <div>
              <List />
            </div>
            <div>
              <List />
            </div>
        </Wrap>
      </Wrapper>
    );
  }