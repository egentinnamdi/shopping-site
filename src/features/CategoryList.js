import styled from "styled-components";
import CategoryHome from "./CategoryHome";
import CategoryFashion from "./categoryFashion";
import CategoryBeauty from "./categoryBeauty";
import CategoryHW from "./categoryH&W";
import CategoryElectronics from "./categoryElectronics";
import MiniHeader from "../ui/CategoryPageFiles/MiniHeader";

const StyledCatList = styled.div`
  margin-top: 40px;
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
      <MiniHeader textOne="category" />
      <Row>
        <CategoryHome />
        <CategoryFashion />
        <CategoryHW />
        <CategoryElectronics />
        <CategoryBeauty />
      </Row>
    </StyledCatList>
  );
}

export default CategoryList;
