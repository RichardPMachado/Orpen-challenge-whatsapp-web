import { LogOut } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useSignOut } from 'react-auth-kit'


interface IHeader {
  userName: string
}

export default function Header(props: IHeader) {
  const signOut = useSignOut()
  const [firstLetter, setFirstLetter] = useState('')
  
  useEffect(()=> {
    if(props.userName){
      setFirstLetter(props.userName[0])
    }
  },[props.userName])
  
  return (
    <section className="row-start-1 w-full rounded-tl-md grid grid-cols-5 bg-[#EEEDFF]">
      <div className="col-span-1 grid place-items-center place-content-center">
        <span className='p-3 w-10 h-10 font-bold bg-[#7727B3] rounded-full text-white' >{firstLetter.toUpperCase()}</span>
      </div>
      <div className='text-[#7727B3] grid place-items-center place-content-center px-2 py-1 col-span-3'>
        {`Seja bem-vindo ${props.userName}!`}
      </div>
      <div className='grid px-2 place-items-center place-content-center py-1 col-span-1'>
        <button 
          className='transition duration-300 text-[#7727B3] hover:text-[#C431A3] hover:scale-x-110'
          onClick={() => signOut() }
        >
          <LogOut/>
        </button>
      </div>
    </section>
  )
}