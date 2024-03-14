import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Home'
import Results from './Results'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
