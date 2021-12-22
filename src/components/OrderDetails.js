import React from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import Sidebar from "components/Sidebar"

const TopPanel = styled.div`
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
  max-width: 700px;
`

const Label = styled.p`
  display: inline;
  font-family: 'PT Sans';
  font-size: 20px;
  line-height: 20px;
  margin-right: 30px;
  color: #393939;
`

const LeftPanel = styled.div``

const Wrapper = styled.div`
  display: flex;
`

const BookWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  margin-left: 30px;
  background: #fff;
  padding: 15px;
  padding-left: 30px;
  color: #393939;
  margin-bottom: 15px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
`

const Cover = styled.img`
  display: block;
  height: 100px;
  border-radius: 4px;
  margin-right: 30px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
`

const Title = styled.p`
  color: black;
  font-size: 19px;
  margin: 0;
  margin-top: 0;
  margin-right: 30px;
  margin-bottom: 4px;
`

const Author = styled.p`
  margin: 0;
  font-size: 17px;
  margin-bottom: 6px;
`

const Price = styled.p`
  margin: 0;
  margin-bottom: 0;
  font-size: 16px;
`

function Book({ order, books }) {
  const price = order.count * order.price
	const book = books.find((b) => b.id == order.id)
	console.log(book)
	console.log(order.id)

  return (
    <BookWrapper>
	<Cover src={book.cover}  />
	<div>
	  <Title>{book.title}</Title>
	  <Author>{book.author}</Author>
	  <Price>{price} ₽</Price>
	</div>
    </BookWrapper>
  )
}

export default function OrderDetails(props) {
  const params = useParams()
  // eslint-disable-next-line
  const orderId = params.orderId

  const [orderDetails, setOrderDetails] = React.useState(null)
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    const getBooks = async () => {
    	const response = await fetch("/getBooks")
    	const json =  await response.json()
	setBooks(json)
    }
    
    const getOrderDetails = async () => {
      const books = await getBooks()

      const payload = JSON.stringify({id: orderId})
	    console.log(payload)
      const response = await fetch("/orderDetails", {
	      method: 'POST',
              headers: { 'Content-Type': 'application/json' },
	      body: payload
      })
      const json = JSON.parse(await response.json())
//	    console.log(json)

      setOrderDetails(json)
    }

    getOrderDetails()
    getBooks()
    console.log(books)
    console.log(orderDetails)
  }, [])

  if (orderDetails === null)
    return <></>

    return (
      <Wrapper>
        <Sidebar />
	<LeftPanel>
	  <TopPanel>
	    <Label>📜 Заказ {orderDetails._id}</Label>
	  </TopPanel>

	  { orderDetails.books.map((b, k) => <Book books={books} order={b} key={k} />) }
        </LeftPanel>
      </Wrapper>
    )
}
