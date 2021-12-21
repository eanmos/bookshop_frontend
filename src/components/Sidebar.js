import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import SidebarNavigation from "components/SidebarNavigation"
import LoginButton from "components/LoginButton"
import CartButton from "components/CartButton"

const SidebarWrapper = styled.div`
  width: 280px;
`

const SidebarMenuWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const ProfileButton = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ddd;
  box-shadow: none;
  color: #595959;
  filter: none;
  font-size: 24px;
  border-radius: 4px;
  padding: 5px 8px;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 8px;

  &:hover {
    background: #ff8700;
    cursor: pointer;
    color: white;
  }
`

function SidebarMenu({ userInfo }) {
	console.log(userInfo)
  if (userInfo !== null && userInfo !== undefined) {
    return (
      <SidebarMenuWrapper>
        <ProfileButton to="/profile">
	    <i class="fas fa-user"></i>
	</ProfileButton>
        <CartButton />
      </SidebarMenuWrapper>
    )
  } else {
    return (
      <SidebarMenuWrapper>
        <LoginButton />
        <CartButton />
      </SidebarMenuWrapper>
    )
  }
}

export default function Sidebar() {
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

  return (
    <SidebarWrapper>
      <SidebarMenu userInfo={userInfo} />
      <SidebarNavigation />
    </SidebarWrapper>
  )
}
