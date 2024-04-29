import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home/Index'
import Auth from '@/pages/Auth/Index'
import SignUp from '@/pages/Auth/SignUp/Index'
import SingIn from '@/pages/Auth/SignIn/Index.tsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </Router>
  )
}

export default App
