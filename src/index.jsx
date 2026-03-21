import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/main.css'
import { Header } from './cmps/header'
import { Provider, useSelector } from 'react-redux'
import { store } from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
	  <BrowserRouter>
	 		<Header/> 
			<RootCmp />
	  </BrowserRouter>
	</Provider>
)
             








