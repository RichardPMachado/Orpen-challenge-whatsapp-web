import './App.css'
import { Routes, Route} from "react-router-dom"
import Login from './Components/Login'
function App() {
// _RPM
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home />}/>
    </Routes>

  )
}

export default App
