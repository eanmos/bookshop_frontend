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
  const getCartBookIds = () => JSON.parse(localStorage.getItem('cart')) || []
  const getCartBooks = () => getCartBookIds().map((id) => books.find((b) => b.id === id ))

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

  return (
    <Wrapper>
      <MakeOrderPanel books={cartBooks} />
      <BooksListInCart books={cartBooks} deleteBookHandler={deleteBookHandler} />
    </Wrapper>
  )
}
