import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledCatList = styled.div`
  margin-top: 40px;

  .catHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  .catHeader h2 {
    font-weight: 900;
    font-size: 21px;
    line-height: 25.41px;
    color: var(--primary-color);
  }
  .catHeader span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14.52px;
    text-align: center;
    padding-top: 7px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  overflow-x: auto;
  width: 100%;
`;

function CategoryList() {
  return (
    <StyledCatList>
      <div className="catHeader">
        <h2>category</h2>
        <span>see more &gt;</span>
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
