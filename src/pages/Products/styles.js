import styled from "styled-components"

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;

`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${props => props.theme.colors.black};
  padding: 20px;
  margin: 20px;

  img{
    height: 200px;
    width: 200px;
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    margin: 10px 0;
  }

`

