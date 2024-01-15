// import './input.css'
import { Routes, Route} from "react-router-dom"
import Login from './Components/Login'
import Home from './Home'
import { RequireAuth } from "react-auth-kit"
import NotFound from './NoFound';
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
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
