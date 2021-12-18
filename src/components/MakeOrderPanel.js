import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 30px;
  background: #ccc;
  border-radius: 4px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 15px;
`

const MakeOrderButton = styled.button`
  display: inline;
  font-family: 'PT Sans';
  color: #fff;
  outline: none;
  border: 0 none;
  border-radius: 4px;
  background: #0650c2;
  padding: 10px 30px;
  font-size: 18px;
  line-height: 19px;

  &:hover {
    cursor: pointer;
    background: #003fa1;
  }
`

const TotalPriceLabel = styled.p`
  display: inline;
  font-family: 'PT Sans';
  font-size: 20px;
  line-height: 20px;
  margin-right: 30px;
  color: #393939;
`

export default function MakeOrderPanel({ books, totalPrice }) {
  if (totalPrice === 0)
    return <></>

  return (
    <Wrapper>
      <TotalPriceLabel>Заказ на сумму {totalPrice} ₽</TotalPriceLabel>
      <MakeOrderButton>Оформить</MakeOrderButton>
    </Wrapper>
  )
}
