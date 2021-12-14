import React from "react"
import styled from 'styled-components'
import Sidebar from "components/Sidebar"
import BookShowcase from "components/BookShowcase"

const Wrapper = styled.div`
  display: flex;
`

export default function HomePage(props) {
    return (
      <Wrapper>
        <Sidebar />
        <BookShowcase books={props.books} />
      </Wrapper>
    )
}
