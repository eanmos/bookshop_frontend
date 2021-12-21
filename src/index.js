import ReactDOM from "react-dom"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from "components/HomePage"
import SignInPage from "components/SignInPage"
import SignUpPage from "components/SignUpPage"
import CartPage from "components/CartPage"
import BookPage from "components/BookPage"
import ProfilePage from "components/ProfilePage"

import "./index.css"

(async () => {
	const getBooks = async () => {
		const response = await fetch("/getBooks")
		return await response.json()
	}

	const books = await getBooks()

	ReactDOM.render(
	  <>
	    <ToastContainer />
	    <BrowserRouter>
	      <Routes>
		<Route exact index path="/" element={ <HomePage books={books} /> } />
		<Route path="/signIn" element={ <SignInPage /> } />
		<Route path="/signUp" element={ <SignUpPage /> } />
		<Route path="/cart" element={ <CartPage books={books} /> } />
		<Route path="/profile" element={ <ProfilePage /> } />
		<Route path="/books/:bookId" element={ <BookPage books={books} /> } />
	      </Routes>
	    </BrowserRouter>
	  </>,
	  document.getElementById('root')
	)
})()
