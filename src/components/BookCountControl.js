import React from "react"
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  color: #666;
  width: fit-content;
  font: 14px "PT Sans";
  margin-top: 10px;
`

const Minus = styled.div`
  border: 1px solid #666;
  padding: 4px 8px;
  border-radius: 4px 0 0 4px;
  background: #ddd;

  &:hover {
    cursor: pointer;
    background: #ccc;
  }
`

const Count = styled.div`
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  padding: 4px 8px;
`

const Plus = styled.div`
  border: 1px solid #666;
  border-radius: 0 4px 4px 0;
  padding: 4px 8px;
  background: #ddd;

  &:hover {
    cursor: pointer;
    background: #ccc;
  }
`

export default function BookCountControl({ book, increment, decrement, getCurrentCount }) {
  const [currentCount, setCurrentCount] = React.useState(getCurrentCount())

  const incrementWrapper = () => {
    increment()
    setCurrentCount(getCurrentCount())
  }

  const decrementWrapper = () => {
    decrement()
    setCurrentCount(getCurrentCount())
  }

  if (currentCount === 0)
    return <></>

  return (
    <Wrapper>
      <Minus onClick={decrementWrapper}>−</Minus>
      <Count>{ getCurrentCount() }</Count>
      <Plus onClick={incrementWrapper}>+</Plus>
    </Wrapper>
  )
}
