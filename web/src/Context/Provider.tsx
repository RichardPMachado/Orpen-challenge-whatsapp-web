import { useMemo } from 'react';
import Context from './Context';

function Provider({ children }:{ children: React.ReactNode }) {

  const contexto = useMemo(() => ({}),[])
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
