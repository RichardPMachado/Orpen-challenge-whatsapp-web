// import './input.css'
import { Routes, Route} from "react-router-dom"
import Login from './Components/Login'
import Home from './Home'
import { RequireAuth } from "react-auth-kit"
function App() {
// _RPM
  return (
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={
        <RequireAuth loginPath={"/"}>
          <Home />
        </RequireAuth>
      }  />
    </Routes>

  )
}

export default App
