import {ReactNode, useMemo, useState } from 'react'
import Context from './Context'



const Provider = ({ children }: {children: ReactNode}) => {
  const [isChat, setIsChat] =useState<boolean>(false)
  

  const contexto = useMemo(() => ({
    isChat, 
    setIsChat

  }),[isChat,setIsChat])
  return (
    <Context.Provider value={contexto}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

/* Coisas que com certeza serão úteis colocar no contexto global:
  - Dados do usuário
  _RPM

*/
