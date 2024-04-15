import styled from "styled-components";

const StyledCatItem = styled.div`
  background-color: green;
  min-width: 136px;
  height: 178px;
  border-radius: 10px;
`;

function CategoryItem() {
  return <StyledCatItem></StyledCatItem>;
}

export default CategoryItem;
