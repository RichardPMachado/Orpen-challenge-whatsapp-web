import { useEffect, useState } from "react"
import { TMessages, TSeparatedDialogs, useChat } from "../../Context/ChatProvider"
import { IChat } from "../../Interfaces/IChat"
import { useAuthUser } from "react-auth-kit"
import { getAllUsers } from "../../Service/userRequest"
import ILoginResponse from '../../../../api/src/Contracts/Interfaces/users/ILoginResponse';

type TMessageNotification = {
  userId: number
  chats: TSeparatedDialogs
}

type TData = {
  id: number,
  recipient: string,
  author: string,
  message: string | undefined,
  createdAt: string | undefined,
  allMessages: IChat[],
  newNotifications: number,
}
export default function MessageNotification(props: TMessageNotification) {
  const {handleIsChat, handleChatMessages} = useChat()
  const [chatNotifications, setChatNotifications] = useState<TData[]>([]) 

  const auth = useAuthUser()
  const user = auth()

  const handleClick = (props: TMessages) => {
    handleChatMessages(props)
    handleIsChat(true)
  }
  useEffect(() => {
    if(user) {
      
      const fetchUsers = async () => {
         try {        
          const users:ILoginResponse[] = await getAllUsers()
         console.log('users', users);
          if(users){

            const data: TData[] = []
            users.forEach(e => 
              data.push({  
              id: e.id,
              recipient: e.firstName,
              author: user.firstName,
              message: props.chats[e.id][props.chats[e.id].length -1].message,
              createdAt: props.chats[e.id][props.chats[e.id].length -1].createdAt,
              allMessages: props.chats[e.id],
              newNotifications: 1,
            }))
            const filterData = data.filter(e => e.id !== user.id)
            console.log('user', filterData)
            setChatNotifications(filterData)
          }
        } catch(err) {
          console.log(err);
        }
      }
       fetchUsers()

      }
    
  },[user, props])

   
  return (
    <section  className="w-full h-1 row-start-3">
      {
        chatNotifications && chatNotifications.map(cN => (
          <button 
            onClick={() => handleClick({
              messages:cN.allMessages,
              recipientId: cN.id,
              recipient: cN.recipient,
            })} 
            key={cN.id}
            className="transition duration-300 hover:bg-slate-300 grid grid-cols-5 w-full my-1 h-16 bg-[#e6e6e7] border-y-1 border-slate-400"
          >
            <div className="col-span-1 grid place-items-center place-content-center h-16">
              <span className='p-3 w-10 h-10 font-bold bg-[#7727B3] rounded-full text-white' >{cN.recipient[0]}</span>
            </div>
            <div className='grid grid-rows-2 col-span-3  place-items-start  px-2 py-1 h-16'>
              <span className='text-sm font-bold'>{cN.recipient}</span>
              <span className='text-sm max-w-52 h-5'>
                {cN.message && cN.message.length < 28 
                  ? cN.message
                  : `${cN.message?.slice(0,27)}...`}
                </span>
            </div>
            <div className='grid grid-rows-2 px-2 place-items-center py-1 col-span-1 h-16'>
              <span className='text-sm font-light text-[#C431A3]'>{cN.createdAt!.split('T')[1].slice(0,5)}</span>
              {cN.newNotifications !== 0 &&
                <span className='bg-[#C431A3] font-light px-2 rounded-full text-white text-sm'>{cN.newNotifications}</span>
              }
            </div>
          </button>
        ))
      }
    </section>
  )
}