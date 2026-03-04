import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	  <BrowserRouter>
			<RootCmp />
	  </BrowserRouter>
)
             








