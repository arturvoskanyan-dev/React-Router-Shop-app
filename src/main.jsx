import { BrowserRouter } from 'react-router-dom'
import {nav, data} from './data/data.js'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App nav={nav} data={data}/>
  </BrowserRouter>
)
