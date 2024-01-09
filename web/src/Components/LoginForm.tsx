import { ChangeEvent, useEffect, useState } from "react"

export default function LoginForm({ tryLogin }: { tryLogin: (
  userName: string, password: string) => Promise<void> }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [failedLogin, setFailedLogin] = useState(false)

  const handleButton = (): boolean => {
    // _RPM
    return !(userName.length >= 3 && password.length >= 4);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    // _RPM
    e.preventDefault();
    try {
      await tryLogin(userName, password);
    } catch {
      setFailedLogin(true);
    }
  }

  useEffect(() => {
    // _RPM
    setFailedLogin(false);
  }, [userName, password]);

  return (
    <form action="">
      <label htmlFor="login">Usuário</label>
      <input
        type="text"
        placeholder="Digite seu nome de usuário"
        id="login"
        value={ userName } 
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
      />
      <label htmlFor="password" className="flex flex-col text-xl">senha</label>
      <input 
        type="password"
        placeholder="Digite sua senha"
        id="password"
        value={ password }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      {
          (failedLogin) && (
            <p>
              {`O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`}
            </p>
          )
      }
      <div className="card">
        <button 
          type="submit"
          disabled={ handleButton() }
          onClick={ handleSubmit }
        >
          Acessar
        </button>
        <p>
          <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </form>
  )
}