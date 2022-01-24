import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CartItem = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  width: 600px;
  height: 50px;

  p strong{
    margin-left: 10px;
  }

  &:not(:first-child){
    border-top: 1px solid ${props => props.theme.black};
    margin-top: 10px;
  }
`



export const Button = styled.button`
  font-size: 20px;
  background: transparent;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`