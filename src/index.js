import ReactDOM from "react-dom"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from "components/HomePage"
import SignInPage from "components/SignInPage"
import SignUpPage from "components/SignUpPage"
import CartPage from "components/CartPage"
import BookPage from "components/BookPage"
import AuthorPage from "components/AuthorPage"
import AddBookPage from "components/AddBookPage"
import AddAuthorPage from "components/AddAuthorPage"

import { __FAKE_DATA__ } from "./__fake_data__"
import "./index.css"

ReactDOM.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route exact index path="/" element={ <HomePage books={ __FAKE_DATA__.books } /> } />
        <Route path="/signIn" element={ <SignInPage /> } />
        <Route path="/signUp" element={ <SignUpPage /> } />
        <Route path="/cart" element={ <CartPage books={ __FAKE_DATA__.books } /> } />
        <Route path="/books/:bookId" element={ <BookPage books={ __FAKE_DATA__.books } /> } />
        <Route path="/authors/:authorId" element={ <AuthorPage /> } />
        <Route path="/addBook" element={ <AddBookPage /> } />
        <Route path="/addAuthor" element={ <AddAuthorPage /> } />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
