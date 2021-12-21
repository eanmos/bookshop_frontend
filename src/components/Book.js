import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import AddToCartButton from "components/AddToCartButton"

const Wrapper = styled.div`
  width: 180px;
`

const BookCover = styled.img`
  width: 90%;
  border-radius: 4px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
`

const PriceBlock = styled.div`
  margin-top: 12px;
  margin-bottom: 5px;
`

const CurrentPrice = styled.span`
  font-size: 17px;
  font-weight: bold;
  margin-right: 5px;
`

const OldPriceWrapper = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: line-through;
`

const DiscountBlockWrapper = styled.div`
  margin: 8px auto;
`

const DiscountPercent = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #ec0002;
  border-radius: 4px;
  color: white;
  transform: rotate(-4deg);
  font: 14px "PT Sans";
  margin-right: 10px;
`

const DiscountDuration = styled.span`
  font: bold 11px "PT Sans";
`

const Title = styled(Link)`
  color: black;
  margin-bottom: 5px;
  font-size: 17px;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #ccc;
    text-underline-offset: 2px;
    cursor: pointer;
  }
`

const Author = styled.div`
  line-height: 1.5;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #ccc;
    text-underline-offset: 2px;
    cursor: pointer;
  }
`

function DiscountBlock({ price, discount }) {
  if (discount) {
    return (
      <DiscountBlockWrapper>
        <DiscountPercent>{ "−" + Math.round(((price - discount.price) / price * 100)) + "%" }</DiscountPercent>
        <DiscountDuration>{"ЕЩЕ " + discount.date + " ДНЯ"}</DiscountDuration>
      </DiscountBlockWrapper>
    )
  } else {
    return <></>
  }
}

function OldPrice({ oldPrice }) {
  if (oldPrice)
    return <OldPriceWrapper>{oldPrice}</OldPriceWrapper>
  else
    return <></>
}

export default function Book({ book }) {
    let { id, cover, price, currentPrice, oldPrice, discount, title, author } = book

    if (discount) {
      currentPrice = discount.price
      oldPrice = price
    } else {
      currentPrice = price
      oldPrice = null
    }

    return (
      <Wrapper>
        <Link to={`/books/${id}`}>
          <BookCover src={cover}></BookCover>
        </Link>

        <PriceBlock>
          <CurrentPrice>{currentPrice} ₽</CurrentPrice>
          <OldPrice oldPrice={oldPrice}></OldPrice>
        </PriceBlock>

        <DiscountBlock price={price} discount={discount} />

        <Title to={`/books/${id}`}>{title}</Title>

        <Author>{author}</Author>

        <AddToCartButton bookId={id} />
      </Wrapper>
    )
}
