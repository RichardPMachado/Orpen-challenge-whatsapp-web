import { useEffect, useState } from "react"
import { IUser } from '../../Interfaces/IUser';
import { getOtherUserById } from "../../Service/userRequest";
import * as Message from "./Message";
import { IChat } from "../../Interfaces/IChat";
import Footer from "./Footer";
import HeaderChat from "./HeaderChat";
// import Context from "../Context/Context";

interface IChatField {
  userId: number
  chats: IChat[]
}

export default function ChatField(props: IChatField) {
  const [otherUser, setOtherUser] = useState<IUser>()
  // const [isChat] = useContext(Context)
  useEffect(() => {
    if(props.userId) { 
      const getOtherUser = async () => {
        try {
          const aux = props.chats[0]
          const authorId = aux.authorId
          const recipientId = aux.recipientId
          const otherUserId = props.userId === authorId ? recipientId : authorId
          const user = await getOtherUserById(otherUserId)
          setOtherUser(user)
          
        }catch(error) {
          console.log(error);
        }
      }
      getOtherUser()
    }
  },[props])

  return (
    <div className="grid grid-rows-12 grid-flow-row w-full h-full bg-red-400">
      { otherUser?.firstName && <HeaderChat letter={otherUser.firstName[0]} userName={otherUser.firstName} /> }
      <section className="row-span-10 bg-[#dedee0] p-2">
        {
        // isChat && 
        props.chats.sort((a,b) => a.id - b.id).map(chat => 
          chat.authorId === props.userId ?
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