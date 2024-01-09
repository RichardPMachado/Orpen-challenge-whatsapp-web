import { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { requestLogin } from '../Service/request'
import { Navigate } from 'react-router-dom';

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
    <>
      <div>
        <a href="https://orpen.com.br/" target="_blank">
          <img src="https://orpen.com.br/assets/img/logo-orpen.png" className="logo orpen" alt="Orpen logo" />
        </a>
      </div>
      <h1>Challenge WhatsApp Web</h1>
      { isLogged && <Navigate to="/home" replace />}
      <LoginForm tryLogin={tryLogin}/>
      <p className="read-the-docs">
        Click here if you want Richard to join the team!
      </p>
    </>
  )

}