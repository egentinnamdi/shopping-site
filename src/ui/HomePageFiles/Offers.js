import styled from "styled-components";
import OfferItem from "./OfferItem";

const StyledOffers = styled.div`
  display: flex;
  align-items: flex-end;
  height: 158px;
  width: 100%;
  gap: 1.8rem;
  overflow-x: scroll;
`;

function Offers() {
  return (
    <StyledOffers>
      <OfferItem
        color="black"
        textOne="best offer"
        textTwo="get up to 50% off"
      />
      <OfferItem color="#D72A0B" textOne="sale" textTwo="get up to 50% off" />
    </StyledOffers>
  );
}

export default Offers;
