import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './MainApp'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>
)
