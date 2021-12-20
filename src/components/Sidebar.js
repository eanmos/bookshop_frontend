import React from "react"
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

function SidebarMenu({ userInfo }) {
  if (userInfo !== null) {
    return (
      <SidebarMenuWrapper>
        <div>userInfo.username</div>
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
        setUserInfo(json.userInfo)
      else
        setUserInfo(null)

      console.log(json)
    }

    userInfo()
  })

  return (
    <SidebarWrapper>
      <SidebarMenu userInfo={userInfo} />
      <SidebarNavigation />
    </SidebarWrapper>
  )
}
