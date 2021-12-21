import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ddd;
  border: 1 px solid #c9c9c9;
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

export default function LoginButton() {
    return <Wrapper to="/signIn"><i class="fas fa-sign-in-alt"></i></Wrapper>
}
