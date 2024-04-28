import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home/Index'
import Auth from '@/pages/Auth/Index'
import SignUp from '@/pages/Auth/SignUp/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
