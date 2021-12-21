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
  width: 100%;
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

export default function ProfilePage(props) {
  const [userInfo, setUserInfo] = React.useState(null)

  React.useEffect(() => {
    const userInfo = async () => {
      const response = await fetch("/userInfo")
      const json = JSON.parse(await response.json())

      if (json.success)
        setUserInfo({ username: json.username, email: json.email })
      else
        setUserInfo(null)

      console.log(json)
    }

    userInfo()
  }, [])

  if (userInfo === null)
	return <></>

    return (
      <Wrapper>
        <Sidebar />
	<LeftPanel>
	  <TopPanel>
	    <Label>🛎️ Ваши заказы, {userInfo.username}</Label>
	  </TopPanel>
        </LeftPanel>
      </Wrapper>
    )
}
