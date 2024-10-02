import styled from "styled-components";

const StyledButton = styled.div`
 display: ${props => (props.Button ? 'block' : 'none')}; /* Control button visibility */
  width: 366px;
  height: 15px;
  padding: 8px; /* Add some padding for better text visibility */
  background-color: #fff; /* Set a background color */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 4px; /* Add rounded corners */
  font-size: 14px; /* Set font size */
  font-weight: bold; /* Make text bold */
  color: #333; /* Set text color */
  
  position: absolute; /* Set absolute positioning */
  top: 274px; /* Set top position */
  left: 27px; /* Set left position */

`;
StyledButton.defaultProps = {
    Button : false,
    opacity: 1,

}
export default StyledButton;