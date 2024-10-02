import CategorySearchBar from "../../ui/CategorySearchBar";
import React, { useState } from "react";
import styled from "styled-components";

const StyledListItem = styled.div``

const Kitchen = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(searchTerm)
    }
  return (

    <div>
    <>

         <CategorySearchBar/>
         <br/><br/><br/><br/><br/><br/><br/>

    </>

    </div>
  )
}

export default Kitchen