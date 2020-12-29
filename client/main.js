import React from 'react'
import { hydrate, render } from "react-dom"
import App from './App'

// Fix: Expected server HTML to contain a matching <a> in
const renderMethod = module.hot ? render : hydrate;

renderMethod(<App/>, document.getElementById('root'))