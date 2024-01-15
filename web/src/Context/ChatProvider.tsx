import {ReactNode, useContext, useState } from 'react'
import { createContext } from 'react';
import { IChat } from '../Interfaces/IChat';

// type TNotifications = {
//   id: number
//   recipient: string 
//   author: string
//   message: string
//   createdAt: string
//   newNotifications: number,
// }

type TChatMessages = {
  chats: IChat[]
  userId: number
}

export type TMessages = {
  messages: IChat[]
  recipientId: number
  recipient: string
}


export type TSeparatedDialogs = {
  [participantId: number]: IChat[];
}

type TIsChat = {
  handleChatMessages: (props: TMessages) => void
  handleChat: (props: TChatMessages) => TSeparatedDialogs
  handleIsChat: (chatBoolean: boolean) => void
  isChat: boolean
  chatMessages: TMessages | null
}

const ChatContext = createContext<TIsChat>({} as TIsChat)

export default function ChatProvider({ children }: {children: ReactNode}) {
  const [isChat, setIsChat] = useState<boolean>(false)
  const [chatMessages, setChatMessages] = useState<TMessages | null>(null)
  // const [notifications, setNotifications] = useState<TNotifications[]>([])
  // const [ messages, setMessages] = useState()
  const handleIsChat = (chatBoolean: boolean) => {
     setIsChat(chatBoolean)
     console.log(isChat)
  }

  const handleChatMessages = (props: TMessages) => {
    setChatMessages(props)
  }
    
  const handleChat = (props: TChatMessages) => {
    const separatedDialogs: TSeparatedDialogs = {};

    props.chats.forEach(message => {
      const { authorId, recipientId } = message;
      if (!separatedDialogs[authorId] || props.userId === message.authorId ) {
        separatedDialogs[authorId] = [message];
      } else {
        separatedDialogs[authorId].push(message);
      }

      if (recipientId !== authorId) {
        if (!separatedDialogs[recipientId]) {
          separatedDialogs[recipientId] = [message];
        } else {
          separatedDialogs[recipientId].push(message);
        }
      }
      
    })
    
   return separatedDialogs
  }
    // setNotifications(separatedDialogs)

  // const handleChatNotifications = () => {

  // }

  return (
    <ChatContext.Provider value={{
      handleChat,
      handleChatMessages,
      handleIsChat,
      isChat,
      chatMessages,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext)
  return context
}

export {useChat}

/* Coisas que com certeza serão úteis colocar no contexto global:
  - Dados do usuário
  _RPM

*/
