import styled from 'styled-components';

const StyledSearchBar = styled.div`
  /* width: 366px; */
  width: 100%;
  height: 50px;
  background-color: #fff; /* Set background color */
  padding: 0px; /* Add some padding for better usability */
  border: 0 0 1px 0 #00A218; /* Set bottom border as specified */
  box-sizing: border-box; /* Ensure padding doesn't affect width/height */
  /* position: absolute; */
  display: flex;
  position: relative;
  margin-top: 100px;
  margin-left: 27px;
  
`;

StyledSearchBar.defaultProps = {
  opacity: 1, // Set default opacity to fully visible
};

export default StyledSearchBar;
