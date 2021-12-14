import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 10px 0;
  padding-bottom: 0;
  height: fit-content;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const EntryWrapper = styled.div`
  border: ${props => props.border};
  padding: 6px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

const Header = styled.div`
  margin: 15px 0;
  padding: 0 20px;
  font-weight: bold;
  font-variant: all-small-caps;
  font-size: 19px;
  color: #222;
`

function Entry({ label, path, border }) {
  return (
    <StyledLink to={path}>
      <EntryWrapper border={border}>
          { label }
      </EntryWrapper>
    </StyledLink>
  )
}

export default function SidebarNavigation() {
  return (
    <Wrapper>
      <Header>Книги для детей</Header>

      <Entry label="Детская художественная литература" path="/" />
      <Entry label="Позновательная литература для детей" path="/" border="none" />

      <Header>Нехудожественная литература</Header>

      <Entry label="Бизнес. Экономика" path="/" />
      <Entry label="Информационные технологии" path="/" />
      <Entry label="История" path="/" />
      <Entry label="Культура. Искусство" path="/" />
      <Entry label="Философские науки" path="/" border="none" />

      <Header>Художественная литература</Header>

      <Entry label="Детективы" path="/" />
      <Entry label="Историческая проза" path="/" />
      <Entry label="Классическая проза" path="/" />
      <Entry label="Фэнтези" path="/" />
      <Entry label="Научная фантастика" path="/" />
      <Entry label="Приключения" path="/" border="none" />
    </Wrapper>
  )
}
