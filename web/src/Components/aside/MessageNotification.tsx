// import { IChat } from "../Interfaces/IChat"

// import { useEffect, useState } from "react"
import { IChat } from "../../Interfaces/IChat"
// import { useAuthUser } from "react-auth-kit"
import { notifications } from "../../utils/notifications"

type TMessageNotification = {
  userId: number
  chats: IChat[]
}
export default function MessageNotification(props: TMessageNotification) {
  // const [chatNotifications, setChatNotifications] = useState<Omit<IChat, 'createdAt'>[]>([]) 
  // const [recipientIds, setRecipientsId] = useState<IChat[]>([])
  // const [isChat, setIsChat] = useState<boolean>(false)
  // const auth = useAuthUser()
  // const user = auth()
  // useEffect(() => {
  //   if(user) {
  //     console.log(props.chats)
  //     props.chats.forEach(chat => {
  //       if(chat.authorId !== user.Id  ) {
  //         if(user.id !== chat.recipientId){
  //           setRecipientsId( prev => [...prev, chat])
  //         }
  //       }
  //     //   setChatNotifications(prev => {
  //     //     if(pre)
  //     //   })
  //     })  
  //   }
    
  // },[user, props])

   
  return (
    <section  className="w-full h-1 row-start-3">
      {
        notifications.map(recipient => (
          <button key={recipient.id} className="transition duration-300 hover:bg-slate-300 grid grid-cols-5 w-full my-1 h-16 bg-[#e6e6e7] border-y-1 border-slate-400">
            <div className="col-span-1 grid place-items-center place-content-center h-16">
              <span className='p-3 w-10 h-10 font-bold bg-[#7727B3] rounded-full text-white' >{recipient.recipient[0]}</span>
            </div>
            <div className='grid grid-rows-2 col-span-3  place-items-start  px-2 py-1 h-16'>
              <span className='text-sm font-bold'>{recipient.recipient}</span>
              <span className='text-sm max-w-52 h-5'>{recipient.message}</span>
            </div>
            <div className='grid grid-rows-2 px-2 place-items-center py-1 col-span-1 h-16'>
              <span className='text-sm font-light'>{recipient.createdAt.split('T')[1].slice(0,5)}</span>
              {recipient.newNotifications !== 0 &&
                <span className='bg-[#C431A3] font-light px-2 rounded-full text-white text-sm'>{recipient.newNotifications}</span>
              }
            </div>
          </button>
        ))
      }
    </section>
  )
}