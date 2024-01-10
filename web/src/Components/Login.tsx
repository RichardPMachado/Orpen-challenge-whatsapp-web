import { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { requestLogin } from '../Service/request'
import { Link, Navigate } from 'react-router-dom';

export default function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const tryLogin = async (nickName: string, password: string): Promise<void> => {
    // _RPM
    const { token, expiresIn, id } = await requestLogin(
      '/user/login',
      { nickName, password },
    );

    if (signIn({
      token,
      expiresIn,
      tokenType: 'Bearer',
      authState: { id },
    })) {
      setIsLogged(true)
    }
  }
  
  useEffect(() => {
    // _RPM
    if (isAuthenticated()) setIsLogged(true);
  }, [isAuthenticated])

  return (   
    <div className=' h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-br from-[#311942] to-[#7727B3]'>

      <main 
        className='border-2 rounded-xl bg-[#EEEDFF] border-[#bb29af]'
      >
        <section className='p-10'>
          <div className='flex justify-center py-8 rounded-lg bg-purple-950 border-2 border-[#bb29af]'>
            <a className='' href="https://orpen.com.br/" target="_blank">
              <img
                className="drop-shadow-lg hover:drop-shadow-xl"
                src="https://orpen.com.br/assets/img/logo-orpen.png"
                alt="Orpen logo"
                />
            </a>
          </div>
          <div className='p-5'>
            <h1 className='flex justify-center font-extrabold text-6xl text-[#5D80B4]'>Challenge</h1>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#7727B3]'>WhatsApp</h2>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#bb29af]'>Web</h2>
          </div>
          {/* <h1 className='mb-10 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#5D80B4] to-[#C431A3]'>Challenge WhatsApp Web</h1> */}
          { isLogged && <Navigate to="/home" replace />}
          <LoginForm tryLogin={tryLogin}/>
          <Link to="https://web.whatsapp.com/" target="_blank">
            <p className="hover:underline m-2 flex justify-center">
              Click here if you want Richard to join the team!
            </p>
          </Link>
        </section>
  
      </main>
    </div>
  )

}