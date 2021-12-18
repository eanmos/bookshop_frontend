import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { toast } from 'react-toastify'
import BookCountControl from 'components/BookCountControl'

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
  width: 100%;
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
  border-radius: 4px 0 0 4px;
`

const ProfitValue = styled.span`
  border: 1px solid #7054be;
  padding: 2px 8px;
  color: #7054be;
  border-radius: 0 4px 4px 0;
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

function Book({ book, deleteBookHandler, triggerCartTotalPriceUpdate }) {
    const { id, cover, currentPrice, oldPrice, discount, title, author, count } = book

    const getCartBookCountById = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const b = cart.find((e) => e.id == id)
      return b ? b.count : 0
    }

    const incrementCartBookCountById = () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      let cartBookIndex = cart.findIndex((e) => e.id == id)

      if (cart[cartBookIndex].count + 1 <= count) {
        cart[cartBookIndex].count++
      } else {
        toast.info('Больше экземпляров нет', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart))
      triggerCartTotalPriceUpdate()
    }

    const decrementCartBookCountById = () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      let cartBookIndex = cart.findIndex((e) => e.id == id)

      if (cart[cartBookIndex].count - 1 > 0) {
        cart[cartBookIndex].count--
        localStorage.setItem('cart', JSON.stringify(cart))
        triggerCartTotalPriceUpdate()
      } else {
        deleteBookHandler(id)
      }
    }

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

        <BookCountControl
          book={book}
          increment={incrementCartBookCountById}
          decrement={decrementCartBookCountById}
          getCurrentCount={getCartBookCountById} />
      </BookWrapper>
    )
}

export default function BooksListInCart({ books, deleteBookHandler, triggerCartTotalPriceUpdate }) {
    return (
      <Wrapper>
        { books.map((e, i) => <Book deleteBookHandler={deleteBookHandler} triggerCartTotalPriceUpdate={triggerCartTotalPriceUpdate} key={i} book={e} />) }
      </Wrapper>
    )
}
