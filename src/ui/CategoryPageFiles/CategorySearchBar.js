import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  margin-top: 40px;
  position: relative;
`;

const StyledSearch = styled.input`
  height: 100%;
  width: 80%;
  border-radius: 15px;
  outline: none;
  border: 2px solid var(--primary-color);
  padding-left: 46px;

  &::placeholder {
    font-weight: 400;
    line-height: 27.39px;
    font-size: 16px;
  }
`;

const StyledSearchImg = styled.img`
  position: absolute;
  top: 14px;
  left: 14px;
  height: 24px;
`;

const StyledScan = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--primary-color);
  width: 52px;
  height: 52px;
  border-radius: 15px;
`;
const StyledScanImg = styled.img`
  height: 24px;
`;

function CategorySearchBar() {
  return (
    <StyledSearchBar>
      <StyledSearchImg src="../../images/Search.png" alt="search" />

      <StyledSearch
        type="text"
        placeholder="Search what you want"
        name="search"
        id="search"
      />

      <StyledScan>
        <StyledScanImg src="../../images/Scan.png" alt="scan" />
      </StyledScan>
    </StyledSearchBar>
  );
}

export default CategorySearchBar;
