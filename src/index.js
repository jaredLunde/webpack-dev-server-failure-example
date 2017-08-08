// static imports
require('../assets/css/foo-app/core.scss')

// js
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const root = document.getElementById('foo-app')


ReactDOM.render(<App/>, root)
