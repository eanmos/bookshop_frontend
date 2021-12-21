import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ddd;
  box-shadow: none;
  color: #595959;
  filter: none;
  font-size: 24px;
  border-radius: 4px;
  padding: 5px 8px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #ff8700;
    cursor: pointer;
    color: white;
  }
`

export default function CartButton() {
    return <Wrapper to="/cart"><i class="fas fa-shopping-cart"></i></Wrapper>
}
