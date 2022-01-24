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
  }
`

export const AddButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${props => props.theme.colors.pink};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`