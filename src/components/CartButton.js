import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0);
  border: 1 px solid #c9c9c9;
  box-shadow: none;
  color: #595959;
  filter: none;
  font: "PT Sans";
  font: 14px "PT Sans";
  border-radius: 4px;
  border: 1px solid #999;
  padding: 4px 8px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #ff8700;
    cursor: pointer;
    color: white;
    border: 1px solid #fc8533;
  }
`

export default function CartButton() {
    return <Wrapper to="/cart">Корзина</Wrapper>
}
