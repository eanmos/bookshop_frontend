import React from "react"
import styled from 'styled-components'
import Book from "components/Book"

const Wrapper = styled.div`
  margin-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`

export default function BookShowcase({ books }) {
    return (
      <Wrapper>
        { books.map((e, i) => <Book key={i} book={e} />) }
      </Wrapper>
    )
}
