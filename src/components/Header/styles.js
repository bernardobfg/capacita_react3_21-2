import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${props => props.theme.colors.primary};
  color:${props => props.theme.colors.headerText};
  padding: 20px 30px;

`
export const Title = styled.h1`
  font-size: 36px;
  color: ${props => props.theme.colors.title};
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 20px;

  li{
    font-size: 20px;
  }

  li + li{
    margin-left: 20px;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.headerText};
    transition: filter .2s;
  }
  a:hover{
    filter: brightness(0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }

`


