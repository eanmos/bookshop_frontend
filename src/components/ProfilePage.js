import React from "react"
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

const OrderWrapper = styled.div`
  border-radius: 4px;
  margin-left: 30px;
  background: #fff;
  padding: 15px;
  font-size: 20px;
  color: #393939;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
  }
`

function Order({ order }) {
  let price = 0

  for (const b of order.books)
	price += b.count * b.price

  const date = new Date(order.datetime).toLocaleString("ru", { month: 'long', day: 'numeric' })

  return (
    <OrderWrapper>
      Заказ от { date } на сумму { price } ₽
    </OrderWrapper>
  )
}

export default function ProfilePage(props) {
  const [userInfo, setUserInfo] = React.useState(null)
  const [userOrders, setUserOrders] = React.useState(null)

  const getUserOrders = async () => {
      const response = await fetch("/getUserOrders")
      const json = await response.json()
      setUserOrders(json)
      console.log(json)
  }

  React.useEffect(() => {
    const userInfo = async () => {
      const response = await fetch("/userInfo")
      const json = JSON.parse(await response.json())

      if (json.success)
        setUserInfo({ username: json.username, email: json.email })
      else
        setUserInfo(null)
    }

    userInfo()
    getUserOrders()
  }, [])

  if (userOrders === null)
    return <></>

  if (userInfo === null)
	return <></>



    return (
      <Wrapper>
        <Sidebar />
	<LeftPanel>
	  <TopPanel>
	    <Label>🛎️ Ваши заказы, {userInfo.username}</Label>
	  </TopPanel>

	  { userOrders.map((o, k) => <Order order={o} key={k} />) }
        </LeftPanel>
      </Wrapper>
    )
}
