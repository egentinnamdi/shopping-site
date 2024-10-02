import React from "react";
import styled from "styled-components";
import Text from "../MultiPageFiles/Text";

const StyledHeader = styled.header`
  margin-top: 50px;
  width: 100%;
  height: 90px;
`;

function CategoryHeader() {
  return (
    <StyledHeader>
      <Text>
        find out what <br /> you want to have
      </Text>
    </StyledHeader>
  );
}

export default CategoryHeader;
