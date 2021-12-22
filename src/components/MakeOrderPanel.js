import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 30px;
  background: rgb(221, 221, 221);
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

export default function MakeOrderPanel({ books, totalPrice, setCartBooks, setTotalPrice }) {
  const getCartBookIdsCount = () => JSON.parse(localStorage.getItem('cart')) || []
  const getCartBooks = () => getCartBookIdsCount().map((e) => books.find((b) => b.id === e.id ))
  const getCartBookCountById = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const b = cart.find((e) => e.id == id)
    return b ? b.count : 0
  }
  const getCartBookPrice = (id) => {
    const b = books.find((e) => e.id == id)

    if (!b)
      console.assert(false)

    return b.discount ? b.discount.price : b.price
  }

  const makeOrder = () => {
    const order = {
      books: [],
      datetime: new Date()
    }

    getCartBooks().forEach((b) => order.books.push({
      id: b.id,
      count: getCartBookCountById(b.id),
      price: getCartBookPrice(b.id)
    }))

    console.log(order)
    sendOrderToServer(order)
  }

  const sendOrderToServer = async (order) => {
    let json

    const response = await fetch("/makeOrder", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(order)
    })

    json = await response.json()
    console.log(json)

    if (json.success) {
      toast.success('Заказ успешно создан 🥰', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setCartBooks([])
      setTotalPrice(0)
      localStorage.setItem('cart', JSON.stringify([]))
      // Do client-side redirect after time-out so user can read the toast
      const timeout = (delay) => new Promise(res => setTimeout(res, delay))
      await timeout(1300)
      window.location = "/profile"
    } else {
      toast.error('Не получилось сделать заказ', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  if (totalPrice === 0)
    return <></>

  return (
    <Wrapper>
      <TotalPriceLabel>Заказ на сумму {totalPrice} ₽</TotalPriceLabel>
      <MakeOrderButton onClick={makeOrder}>Оформить</MakeOrderButton>
    </Wrapper>
  )
}
