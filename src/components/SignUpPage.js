import React from "react"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background: rgba(0, 0, 0, 0.03);
    font: 14px 'PT Sans';
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 35px;
  height: fit-content;
  width: 280px;
  display: flex;
  flex-direction: column;
`
const Header = styled.h1`
  text-align: center;
  color: #222;
  margin-top: 0;
`
const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  padding: 0;
  max-width: max-content;
`
const Label = styled.label`
  display: block;
  font-weight: bold;
  font-variant: all-small-caps;
  font-size: 19px;
  color: #222;
  font: 14px 'PT Sans';
  margin: 5px 0;
  margin-top: 10px;
  width: 100%;
`
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.07);
  padding: 5px 8px;
  outline: none;
`
const InputWrapper = styled.div`
  width: 100%;
  max-width: fit-content;
`

const SignUpButton = styled.button`
  background: rgba(0, 0, 0, 0);
  border: 1 px solid #c9c9c9;
  box-shadow: none;
  color: #595959;
  filter: none;
  font: "PT Sans";
  font: 14px "PT Sans";
  border-radius: 4px;
  border: 1px solid #999;
  padding: 4px 8px;
  text-transform: uppercase;
  margin-right: 8px;
  margin-top: 15px;
  height: 40px;

  &:hover {
    background: #ff8700;
    cursor: pointer;
    color: white;
    border: 1px solid #fc8533;
  }
`

const Disclaimer = styled.span`
  color: #999;
  font-size: 11px;
  text-align: center;
  margin-top: 10px;
`

const Copyright = styled.p`
  color: #aaa;
  font-size: 11px;
  text-align: center;
  margin-top: 15px;
`

export default function SignUpPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>Регистрация</Header>

        <Form method="post" action="/signUp">
          <InputWrapper>
            <Label for="username">Имя</Label>
            <Input autocomplete="off" required spellcheck="off" id="username" type="text" name="username" />
          </InputWrapper>

          <InputWrapper>
            <Label for="email">Электронная почта</Label>
            <Input autocomplete="off" required spellcheck="off" id="email" type="email" name="username" />
          </InputWrapper>

          <InputWrapper>
            <Label for="password">Пароль</Label>
            <Input autocomplete="off" required spellcheck="off" id="password" type="password" name="password" />
          </InputWrapper>

          <SignUpButton type="submit" value="Зарегистрироваться">
            Зарегистрироваться
          </SignUpButton>
        </Form>

        <Disclaimer>
          Нажимая «Зарегистрироваться» вы соглашаетесь с правилами использования сервиса.
        </Disclaimer>
      </Wrapper>

      <Copyright>
        © BookShop, 2021
      </Copyright>
    </>
  )
}
