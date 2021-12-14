import React from "react"
import styled from 'styled-components'
import { toast } from 'react-toastify'

const Button = styled.button`
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
  margin-right: 8px;
  outline: none;

  &:hover {
    background: #ff8700;
    cursor: pointer;
    color: white;
    border: 1px solid #fc8533;
  }
`

export default function AddToCartButton({ icon, bookId }) {
  const addToCart = () => {
    if (bookId === undefined || bookId === null)
      return

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(bookId)
    localStorage.setItem('cart', JSON.stringify(cart))

    toast.success('Товар успешно добавлен в корзину', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (icon)
    return <Button onClick={addToCart}><i class="fas fa-shopping-cart" style={{marginRight: "4px"}}></i> В корзину</Button>
  else
    return <Button onClick={addToCart}>В корзину</Button>
}
