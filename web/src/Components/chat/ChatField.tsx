import { useEffect, useState } from "react"
import { IUser } from '../../Interfaces/IUser';
import * as Message from "./Message";
import Footer from "./Footer";
import HeaderChat from "./HeaderChat";
import { useChat } from "../../Context/ChatProvider";
import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

export default function ChatField() {
  const {isChat, chatMessages, handleIsChat} = useChat()
  const [otherUser, setOtherUser] = useState<IUser>()

  const auth = useAuthUser()
  const user = auth()

    useEffect(() => {
      handleIsChat(false)
    },[])

    useEffect(() => {
    if(chatMessages && user) { 
      setOtherUser({id: chatMessages.recipientId, firstName: chatMessages.recipient})
    }
  },[chatMessages, user])

  return (
    <div className="grid grid-rows-12 grid-flow-row w-full h-full">
      { otherUser?.firstName ? <HeaderChat letter={otherUser.firstName[0]} userName={otherUser.firstName} />
        : <section className="row-start-1 bg-[#EEEDFF] rounded-tr-md" />
      }
      <section className="row-span-10 bg-[#dedee0] p-2">
        { !isChat ?  
          <section className='h-full flex flex-col justify-center items-center'>
            <h1 className='flex justify-center font-extrabold text-6xl text-[#5D80B4] transition duration-300 hover:scale-105'>#RichardOrpen2024</h1>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#7727B3] transition duration-300 hover:scale-105'>Challenge</h2>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#bb29af] transition duration-300 hover:scale-105'>WhatsApp Web</h2>
            <Link to="https://web.whatsapp.com/" target="_blank">
              <p className="hover:underline mt-5 flex justify-center text-[#5D80B4]">
                Click here if you want Richard to join the team!
              </p>
            </Link>
          </section> 
        : chatMessages && chatMessages.messages.sort((a,b) => a.id - b.id).map(chat => 
          chat.authorId !== otherUser?.id ?
            (
              <div key={`my-message-${chat.id}`} className="flex justify-end mr-20">
                <Message.MyMessage date={chat.createdAt} message={chat.message} />
              </div>
            )
            : (
            <div key={`your-message-${chat.id}`} className="flex justify-start ml-20">
              <Message.YourMessage date={chat.createdAt} message={chat.message}/>
            </div>
            )
          )
        }
      </section>
      <Footer />
    </div>

  )
}