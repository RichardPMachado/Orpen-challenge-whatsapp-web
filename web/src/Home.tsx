import MessageNotification from './Components/aside/MessageNotification'
import Header from './Components/aside/Header'
import { IChat } from './Interfaces/IChat'
import { useEffect, useState } from 'react'
import Filter from './Components/aside/Filter'
import { useAuthUser } from 'react-auth-kit'
import { AuthStateUserObject } from 'react-auth-kit/dist/types'
import { getChatByUserId } from './Service/chatRequest'
import ChatField from './Components/chat/ChatField'
import { TSeparatedDialogs, useChat } from './Context/ChatProvider'


interface IUserAuth {
  id: number
  firstName: string
}
export default function Home() {
  const [chats, setChats] = useState<TSeparatedDialogs>({})
  const [chats2, setChats2] = useState<IChat[]>([])
  const {handleChat} = useChat()
  // const [isCHat, setIsMessage] =useState<boolean>(false)
  let user: IUserAuth = {
    id: 0,
    firstName: ''
  }
  
  const auth = useAuthUser();
  
  if(auth()) {
    const { id, firstName } = auth() as AuthStateUserObject
    user = {id, firstName }
  }
 
  
  
  useEffect(() => {
    if(user.id){
      
      const messageNotificationsGroup = async () => {
        try {
          const fetchChats = await getChatByUserId(user.id)
          const test = handleChat({chats: fetchChats, userId: user.id })
          
          setChats2(fetchChats)
          setChats(test)
          
        } catch(err) {
          console.log(err)
        }
      }
      messageNotificationsGroup()
    }
  },[user.id])
  return (
    <div className=' h-screen w-screen p-10 bg-gradient-to-br from-[#311942] to-[#7727B3]'>
      <div className="grid grid-cols-4 h-full bg-[#EEEDFF] rounded border-2 border-[#C431A3]">
        <aside className="grid grid-rows-12 col-span-1 rounded-sm border-4 border-r-[#e6e6e7]">
          <Header userName={user.firstName} />
          <Filter />
          <MessageNotification userId={user.id} chats={chats} />
        </aside>
        <main className="col-span-3">
          {
           (
            <ChatField 
              userId={user.id}
              chats={chats2}
            />
          )}
        </main>
      </div>
    </div>
  )
} 