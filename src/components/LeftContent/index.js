import React from 'react';
import Categories from "./categories";
import Color from "./color";
import Size from "./size";
import Price from "./price";
import TopRated from "./toprated";
import Tags from "./tags";
function index(props) {
    return (
        <div>
            <Categories />
            <Color />
            <Size />
            <Price />
            <TopRated />
            <Tags />
        </div>
    );
}

export default index;