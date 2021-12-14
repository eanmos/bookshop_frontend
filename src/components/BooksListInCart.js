import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`

const BookWrapper = styled.div`
  width: 180px;
`

const BookCover = styled.img`
  width: 90%;
  border-radius: 4px;
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

const ProfitBlockWrapper = styled.div`
  margin: 11px auto;
  font-size: 12px;
`

const ProfitPercent = styled.span`
  background-color: #7054be;
  padding: 3px 8px;
  color: white;
`

const ProfitValue = styled.span`
  border: 1px solid #7054be;
  padding: 2px 8px;
  color: #7054be;
`

const DeleteBookFromCartWrapper = styled.div`
  background: rgba(0, 0, 0, 0);
  border: 1px solid #ad0a05;
  box-shadow: none;
  color: #ad0a05;
  filter: none;
  font: "PT Sans";
  font: 14px "PT Sans";
  border-radius: 4px;
  padding: 4px 8px;
  text-transform: uppercase;
  margin-right: 8px;
  outline: none;
  width: fit-content;

  &:hover {
    background: #ad0a05;
    cursor: pointer;
    color: white;
    border: 1px solid #ad0a05;
  }
`

function ProfitBlock({ discount, oldPrice, currentPrice }) {
  if (discount) {
    return (
      <ProfitBlockWrapper>
        <ProfitPercent>{ "−" + discount.percent + "%" }</ProfitPercent>
        <ProfitValue>{"Выгода " + (oldPrice - currentPrice) + " ₽" }</ProfitValue>
      </ProfitBlockWrapper>
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

function DeleteBookFromCart({ bookId, deleteBookHandler }) {
  return (
    <DeleteBookFromCartWrapper onClick={deleteBookHandler.bind(this, bookId)}>
      УДАЛИТЬ
    </DeleteBookFromCartWrapper>
  )
}

function Book({ book, deleteBookHandler }) {
    const { id, cover, currentPrice, oldPrice, discount, title, author } = book

    return (
      <BookWrapper>
        <Link to={`/books/${id}`}>
          <BookCover src={cover}></BookCover>
        </Link>

        <PriceBlock>
          <CurrentPrice>{currentPrice} ₽</CurrentPrice>
          <OldPrice oldPrice={oldPrice}></OldPrice>
        </PriceBlock>

        <ProfitBlock discount={discount} oldPrice={oldPrice} currentPrice={currentPrice} />

        <Title to={`/books/${id}`}>{title}</Title>

        <Author>{author}</Author>

        <DeleteBookFromCart bookId={id} deleteBookHandler={deleteBookHandler} />
      </BookWrapper>
    )
}

export default function BooksListInCart({ books, deleteBookHandler }) {
    return (
      <Wrapper>
        { books.map((e, i) => <Book deleteBookHandler={deleteBookHandler} key={i} book={e} />) }
      </Wrapper>
    )
}