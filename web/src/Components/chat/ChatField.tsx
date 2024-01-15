import { useEffect, useState } from "react"
import { IUser } from '../../Interfaces/IUser';
// import { getOtherUserById } from "../../Service/userRequest";
import * as Message from "./Message";
import Footer from "./Footer";
import HeaderChat from "./HeaderChat";
import { useChat } from "../../Context/ChatProvider";
import { useAuthUser } from "react-auth-kit";
// import Context from "../Context/Context";

export default function ChatField() {
  const {isChat, chatMessages} = useChat()
  const [otherUser, setOtherUser] = useState<IUser>()

  const auth = useAuthUser()
  const user = auth()

  useEffect(() => {
    if(chatMessages && user) { 
      setOtherUser({id: chatMessages.recipientId, firstName: chatMessages.recipient})
    }
  },[chatMessages, user])

  return (
    <div className="grid grid-rows-12 grid-flow-row w-full h-full bg-red-400">
      { otherUser?.firstName && <HeaderChat letter={otherUser.firstName[0]} userName={otherUser.firstName} /> }
      <section className="row-span-10 bg-[#dedee0] p-2">
        {
        isChat && chatMessages && chatMessages.messages.sort((a,b) => a.id - b.id).map(chat => 
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