import { useState } from 'react'
import './App.css'

function App() {
  const [success, setSuccess] = useState('Acessar')

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src="https://orpen.com.br/assets/img/logo-orpen.png" className="logo orpen" alt="Orpen logo" />
        </a>
      </div>
      <h1>Challenge WhatsApp Web</h1>
      <form action="">
        <label htmlFor="login">Usuário</label>
        <input id="login" type="text" />
        <label htmlFor="password">senha</label>
        <input id="password" type="password" />
        <div className="card">
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            setSuccess('sucesso')
          } }>
            {success}
          </button>
          <p>
            <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </form>
      <p className="read-the-docs">
        Click here if you want Richard to join the team!
      </p>
    </>
  )
}

export default App
