import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledCatList = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
  overflow-x: auto;
  width: 100%;
`;

function CategoryList() {
  return (
    <StyledCatList>
      <div>
        <h2>category</h2>
      </div>
      <Row>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Row>
    </StyledCatList>
  );
}

export default CategoryList;
