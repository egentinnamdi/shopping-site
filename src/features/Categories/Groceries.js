import styled from "styled-components";
import SlideBar from "../../ui/CategoryPageFiles/SlideBar";
import MiniHeader from "../../ui/CategoryPageFiles/MiniHeader";
import ProductList from "../../ui/CategoryPageFiles/ProductList";

const StyledGroceries = styled.div``;

function Groceries() {
<<<<<<< HEAD
  return <StyledGroceries>Groceries for sale where foods are </StyledGroceries>;
=======
  return (
    <StyledGroceries>
      <SlideBar />
      <ProductList />
      <MiniHeader fontSize="18px" textOne="vegetables" textTwo="view" />
      <MiniHeader fontSize="18px" textOne="electronics" textTwo="view" />
    </StyledGroceries>
  );
>>>>>>> e57499b5b8a658f5af3e61d6e4ef56f73457d394
}

export default Groceries;
