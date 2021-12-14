import React from "react"
import styled from 'styled-components'
import { toast } from 'react-toastify'
import BooksListInCart from 'components/BooksListInCart'

export default function CartBookList({ books }) {
  const getCartBookIds = () => JSON.parse(localStorage.getItem('cart')) || []
  const getCartBooks = () => getCartBookIds().map((id) => books.find((b) => b.id == id))

  let [cartBooks, setCartBooks] = React.useState(getCartBooks())

  const deleteBookHandler = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = cart.filter(i => i !== id)
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
  }

  return <BooksListInCart books={cartBooks} deleteBookHandler={deleteBookHandler} />
}
