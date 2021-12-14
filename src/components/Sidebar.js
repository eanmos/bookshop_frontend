import React from "react"
import styled from 'styled-components'
import SidebarNavigation from "components/SidebarNavigation"
import LoginButton from "components/LoginButton"
import CartButton from "components/CartButton"

const SidebarWrapper = styled.div`
  width: 280px;
`

const SidebarMenu = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export default function Sidebar() {
    return (
      <SidebarWrapper>
        <SidebarMenu>
          <LoginButton />
          <CartButton />
        </SidebarMenu>
        <SidebarNavigation />
      </SidebarWrapper>
    )
}
