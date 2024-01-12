// import { useContext } from "react"
// import Provider from "../Context/Provider"
import { Search } from 'lucide-react'

export default function Filter() {
  // const {
  //   fetchUsersData,
  //   setFetchUsersData,
  //   nameFiltered,
  //   setNameFiltered,
  //   searchedUsers,
  //   setSearchedChat,
  // } = useContext(Provider)

  
  return (
    <div className="row-start-2 flex justify-center border-2 border-y-slate-400 items-center h-14 w-full bg-[#EEEDFF]">
      <span
        className="cursor-pointer p-1 bg-white rounded-l-lg "
      >
        <Search 
          className="w-5 h-5 cursor-pointer transition duration-300 text-[#7727B3] hover:text-[#C431A3] hover:scale-x-105"
        />
      </span>
      <input 
        className="cursor-pointer rounded-r-lg pl-4 text-darkBlueDetails focus:border-2 focus:border-yellowDetails focus:outline-none"
        type="text"
        placeholder="Pesquise pelo nome" 
        // value={nameFiltered}
        // onChange={({ target }) => {
        //   setNameFiltered(target.value)
        //   setSearchedChat(fetchUsersData.filter(user => user.firstName.toLowerCase().includes(nameFiltered.toLowerCase())))
        //   fetchUsersData
        // }}
      />
    </div>
  )  
}