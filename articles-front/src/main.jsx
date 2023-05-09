import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function RunMain(nm) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App user={ nm }/>
    </React.StrictMode>,
  )
}

fetch('https://reqres.in/api/users')
    .then(rs => rs.json())
    .then(dt => RunMain(dt.data[1].first_name))