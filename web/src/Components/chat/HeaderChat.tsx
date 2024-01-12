import { MoreVertical, Search } from "lucide-react"

interface IHeaderChat{
  letter: string
  userName: string
}

export default function HeaderChat(props: IHeaderChat) {
  // _RPM
  return (
    <section className="row-start-1 grid grid-cols-8  bg-[#EEEDFF] rounded-tr-md">
        <div className="flex justify-center items-center">
          <span className='p-3 w-10 h-10 font-bold bg-[#7727B3] rounded-full text-white' >
            {props.letter}
          </span>
        </div>
        <div className="col-span-6 flex flex-col justify-center">
          <span className="font-medium text-[#7727B3]">{props.userName}</span>
          <span className="text-sm">Online</span>
        </div>
        <div className="flex justify-center items-center">
          <span
            className="cursor-pointer p-2 rounded-l-lg "
          >
            <Search 
              className="w-6 h-6 cursor-pointer transition duration-300 text-[#7727B3] hover:text-[#C431A3] hover:scale-x-105"
            />
          </span>
          <MoreVertical 
            className="w-6 h-6 cursor-pointer transition duration-300 text-[#7727B3] hover:text-[#C431A3] hover:scale-x-105"
          />
        </div>
      </section>
  )

}