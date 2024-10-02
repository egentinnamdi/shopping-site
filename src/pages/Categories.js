import Navbar from "../features/Navbar";
import styled from "styled-components";
import Menu from "../ui/CategoryPageFiles/Menu";
import { Outlet } from "react-router-dom";
import CategoryHeader from "../ui/CategoryPageFiles/CategoryHeader";
import CategorySearchBar from "../ui/CategoryPageFiles/CategorySearchBar";

const StyledCategories = styled.div``;

function Categories() {
  return (
    <StyledCategories>
      <CategoryHeader />
      <CategorySearchBar />
      <Menu />
      <Outlet />
      <Navbar />
    </StyledCategories>
  );
}

export default Categories;
