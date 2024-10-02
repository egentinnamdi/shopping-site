import React, { useState } from 'react';
import styled from "styled-components";
import StyledButton from "./StyledButtons"
import StyledSearchBar from './StyledSearchBar';

// const StyledSearchBar = styled.div`
//  display: flex;
//  justify-content: space-between;
//  width: 100%;
//  height: 50px;
//  margin-top: 200px;
//  margin-left: 27px;
//  border: 0px, 0px, 1px, 0px;
//  position: relative;
//  color: #00A218;

// `



const StyledSearch = styled.input`
  height: 100%;
  width: 80%;
  border-radius: 15px;
  outline: none;
  border-bottom: 1px;
  border: 0px, 0px, 1px, 0px;
  outline: ;
  color: var(--secondary-color);

  &::placeholder {
    font-weight: 400;
    line-height: 27.39px;
    font-size: 16px;
    padding: 10px;
    transform: translate(46px, 1px);
  }
`;

const StyledSearchImg = styled.img`
  /* position: absolute;
  top: 4px;
  width: 39px;
  border-radius: 8px;
  left: 322px;
  height: 42px; */
  display: flex;
  position: relative;

  margin-top: 12px;
  height: 42px;
  width: 39px;
  margin-left: -55px;
`;



const CategorySearchBarUI = () => {
    const [showButton, setshowButton] = useState(false);
    const [searchBarOpacity, setSearchBarOpacity] = useState(1); // Control search bar opacity

    const HandleButtonClick = () =>  {
        setshowButton(!showButton);
    };
  
    return (
    <div>
      <StyledSearchBar opacity={searchBarOpacity}>
      <></>
      <StyledSearch
        type="text"
        placeholder="Search what you want"
        name="search"
        id="search"
      />
       <StyledSearchImg src="../../images/setting-4.png" alt="search" />
       <button
       button={false}
    //   Button={showButton} 
      onclick={HandleButtonClick}
      >
      SUGGESTED ITEMS</button>
      </StyledSearchBar>

      
    </div>
  )
}

export default CategorySearchBarUI
