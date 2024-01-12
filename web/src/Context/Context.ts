import { createContext } from 'react';

type TIsChat = {
  isChat: boolean
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>
}
const Context = createContext<TIsChat | null>(null)

export default Context;
