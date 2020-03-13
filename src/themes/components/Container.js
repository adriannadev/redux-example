import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.color.background};
  color: ${props => props.theme.color.textColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
