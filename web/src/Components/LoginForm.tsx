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
      <section className=" flex-col justify-between flex items-center">
        
        {/* <label 
          htmlFor="login" 
          className="text-xl text-slate-400 cursor-pointer"
        >
          Usuário
        </label> */}
        <input
          className="m-2 h-12 pl-2 shadow-lg rounded focus:border-2 focus:border-[#C431A3] focus:outline-none hover:border-2 hover:border-[#5D80B4]"
          type="text"
          placeholder="Digite seu nome de usuário"
          id="login"
          value={ userName } 
          onChange={ (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
        {/* <label 
          htmlFor="password"
          className="text-xl text-white cursor-pointer"
        >
          Senha
        </label> */}
        <input 
          className="m-2 h-12 pl-2 shadow-lg rounded focus:border-2 focus:border-[#C431A3] focus:outline-none hover:border-2 hover:border-[#5D80B4]"
          type="password"
          placeholder="Digite sua senha"
          id="password"
          value={ password }
          onChange={ (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      {
        (failedLogin) && (
          <p className="m-2">
            {`O endereço de e-mail ou a senha não estão corretos.
              Por favor, tente novamente.`}
          </p>
        )
        }
      <div className="">
        <button 
          className='m-2 px-10 h-12 rounded font-medium hover:scale-105 transition duration-300 text-white hover:bg-white bg-gradient-to-r from-[#5D80B4] to-[#C431A3]'
          type="submit"
          disabled={ handleButton() }
          onClick={ handleSubmit }
          >
          Acessar
        </button>
        {/* <p>
          <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
        </section>
    </form>
  )
}