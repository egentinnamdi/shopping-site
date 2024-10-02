import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const ProductDetailHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  width: 1920px;
  height: 2504px;
  background: #ffffff;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 1920px;
  height: 300px;
`;
const navigation__item = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Widget = styled.div`
 width: 1920px;
  height: 80px;
  background: #000000;
`;
const Discount = styled.div` 
 display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0;
gap: 8px;
position: absolute;
left: 45.31%;
right: 45.31%;
top: 20%;
bottom: 20%;
`;
const UpToText = styled.div`
  width: 35px;
  height: 20px;
  border: 1px solid #000000; /* Added normal border */

  /* Existing styles */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const PriceText = styled.div`
  width: 89px;
  height: 48px;
  border: 1px solid #000000; /* Added normal border */

  /* Existing styles */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #00A218;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const OffText  = styled.div`
  width: 40px;
  height: 28px;
  border: 1px solid #000000; /* Added normal border */

  /* Existing styles */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const Button = styled.div`
  /* Existing styles */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 8px;
  position: absolute;
  left: 76.28%;
  right: 15.6%;
  top: 20%;
  bottom: 20%;
  background: #00A218;
  border-radius: 2px;
`;
// Label
const Label = styled.div`
  width: 80px;
  height: 48px;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 48px;
  letter-spacing: 0.012em;
  text-transform: uppercase;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Arrow Right Icon (assuming it's an SVG)
const ArrowRightIcon = styled.svg`
  width: 20px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Close Button
const CloseButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;
  position: absolute;
  left: 97.08%;
  right: 1.25%;
  top: 30%;
  bottom: 30%;
  background: #303639;
  border-radius: 2px;
`;

// Close Icon (assuming it's an SVG)
const CloseIcon = styled.svg`
  width: 16px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Close Icon Paths (assuming specific paths are defined)
const CloseIconPath1 = styled.path`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  fill: #FFFFFF;
  stroke: #FFFFFF;
  stroke-width: 1.5px;
`;

const CloseIconPath2 = styled.path`
  position: absolute;
  left: 21.88%;
  right: 21.88%;
  top: 21.88%;
  bottom: 21.88%;
  fill: #FFFFFF;
  stroke: #FFFFFF;
  stroke-width: 1.5px;
`;

// Navigation
const Navigation = styled.div`
  width: 1920px;
  height: 220px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Top Nav
const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 300px;
  gap: 607px;
  position: absolute;
  width: 1920px;
  height: 52px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.16);
`;


const PorductDetail = styled.div`
  width: 1, 320px;
  height: 778px;
  padding: 32px 0px 72px 0px;
  gap: 56px;
  opacity: 0px;
`;
const ProductPreview = styled.div``;


const ProductInformation = styled.div``;

const Content = styled.div``;
const Description = styled.div``;

const Feature = styled.div``;
const ShippingInformation = styled.div``;

const Products = styled.div`
  width: 1920px;
  height: 528px;
  padding: 72px, 300px, 72px, 300px;
  gap: 24px;
`;
const FlashSalesToday = styled.div`
  width: 312px;
  height: 384px;
  gap: 16px;
`;
const BestSellers = styled.div`
  height: 312px;
  height: 384px;
  gap: 16px;
`;
const NewArrivals = styled.div`
  width: 312px;
  height: 384px;
  gap: 16px;
`;
const TopRated = styled.div`
  width: 312px;
  height: 384px;
  gap: 16px;
`;
const StyledList = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 21px;
  height: 492px;
  width: 100%;
  margin-top: 40px;
`;

const Main = () => {
  return (
    <ProductDetailHome>
      <Header />
      <NavBar>hello</NavBar>
      <PorductDetail>
        <ProductPreview>hello</ProductPreview>
        <ProductDetail>hello</ProductDetail>
      </PorductDetail>
      <ProductInformation>
        <TabNav>hello</TabNav>
        <Content>
          <Description>hello</Description>
          <Feature>hello</Feature>
          <ShippingInformation>hello</ShippingInformation>
        </Content>
        <Products>
          <FlashSalesToday>hello</FlashSalesToday>
          <BestSellers>hello</BestSellers>
          <NewArrivals>hello</NewArrivals>
          <TopRated>hello</TopRated>
        </Products>
      </ProductInformation>
      <Footer />
    </ProductDetailHome>
  );
};

export default Main;
