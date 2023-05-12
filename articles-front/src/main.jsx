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

fetch('http://0.0.0.0:5001')
    .then(rs => rs.json())
    .then(dt => RunMain(dt.data[0].name))