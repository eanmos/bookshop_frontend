import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'
import BooksListInCart from 'components/BooksListInCart'
import MakeOrderPanel from 'components/MakeOrderPanel'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function CartBookList({ books }) {
  const getCartBookIdsCount = () => JSON.parse(localStorage.getItem('cart')) || []
  const getCartBooks = () => getCartBookIdsCount().map((e) => books.find((b) => b.id === e.id ))

  let [cartBooks, setCartBooks] = React.useState(getCartBooks())

  const getCartBookCountById = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const b = cart.find((e) => e.id == id)
    return b ? b.count : 0
  }

  const calcTotalPrice = (books) => {
    return books.length > 0 ? books.reduce((x, y) => {
      return { currentPrice: (x ? x.currentPrice : 0) + (y ? y.currentPrice * getCartBookCountById(y.id) : 0) }
    }, 0).currentPrice : 0
  }

  let [totalPrice, setTotalPrice] = React.useState(calcTotalPrice(cartBooks))

  const deleteBookHandler = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = cart.filter(e => e.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
    setCartBooks(getCartBooks())

    toast.info('Товар удален из корзины', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    triggerCartTotalPriceUpdate()
  }

  const triggerCartTotalPriceUpdate = () => {
    setCartBooks(getCartBooks())
    setTotalPrice(calcTotalPrice(cartBooks))
  }

  return (
    <Wrapper>
      <MakeOrderPanel books={cartBooks} totalPrice={totalPrice} />
      <BooksListInCart books={cartBooks} deleteBookHandler={deleteBookHandler} triggerCartTotalPriceUpdate={triggerCartTotalPriceUpdate} />
    </Wrapper>
  )
}
