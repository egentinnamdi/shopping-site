import styled from "styled-components";
import ProductItem from "./ProductItem";
import MiniHeader from "./MiniHeader";

const StyProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  margin-top: 40px;
`;

function ProductList() {
  return (
    <StyProductList>
      <MiniHeader textOne="new stock" />
      <ProductItem image="smart-watch" />
      <ProductItem image="laptop" />
      <ProductItem image="shirt" />
      <ProductItem image="monitor-stand" />
    </StyProductList>
  );
}

export default ProductList;
