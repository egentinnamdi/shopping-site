import Navbar from "../features/Navbar";
import styled from "styled-components";
import Text from "../ui/Text";
import GroceHeader from "../features/Groceries/GroceHeader";

const StyledGroceries = styled.div``;

function Groceries() {
  return (
    <StyledGroceries>
      <GroceHeader />
      <Navbar />
    </StyledGroceries>
  );
}

export default Groceries;
