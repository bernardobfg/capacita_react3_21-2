import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 500px;
    height: 300px;
    max-width: 95vw;
  }
`

export const AddButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.headerText};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: filter .2s;
  &:hover{
    filter: brightness(1.1);
  }
`