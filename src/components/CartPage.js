import React from "react"
import styled from 'styled-components'
import Sidebar from "components/Sidebar"
import CartBookList from "components/CartBookList"

const Wrapper = styled.div`
  display: flex;
`

export default function CartPage({ books }) {
    return (
      <Wrapper>
        <Sidebar />
        <CartBookList books={books} />
      </Wrapper>
    )
}
