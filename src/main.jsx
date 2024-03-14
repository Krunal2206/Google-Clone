import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './stateProvider/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App />
  </StateProvider>
)
