import styled from "styled-components";

const StyProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #dddddb;
  gap: 12px;
`;

const ProductImage = styled.div`
  display: grid;
  place-items: center;
  background-color: #f4f5f7;
  border-radius: 8px;
  height: 100%;
  width: 105px;
  & img {
    height: 60px;
    width: 60px;
    object-fit: cover;
  }
`;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  flex-grow: 1;
  line-height: 19.36px;
  text-transform: capitalize;

  & h3 {
    font-size: 16px;
    color: var(--primary-color);
    font-weight: 500;
  }
  & div {
    display: flex;
    gap: 10px;

    & span {
      font-size: 12px;
    }
  }
  & span {
    font-size: 16px;
    font-weight: 400;
  }
`;

function ProductItem({ image }) {
  return (
    <StyProductItem>
      <ProductImage>
        <img src={`../../images/${image}.png`} alt={`${image}`} />
      </ProductImage>
      <ProductDescription>
        <h3>smart apple watch</h3>
        <div>
          <span>walnus home</span>
          <span>4.3</span>
        </div>
        <span>$130,000.00</span>
      </ProductDescription>
    </StyProductItem>
  );
}

export default ProductItem;
