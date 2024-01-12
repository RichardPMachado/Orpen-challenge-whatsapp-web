import { ArrowBigRight, SmilePlus } from "lucide-react";

export default function Footer() {
  // _RPM
  return (
    <section className="row-end-13 grid grid-cols-8  bg-[#EEEDFF] rounded-br-md">
    <span className=" flex justify-center items-center col-span-1">
      <SmilePlus className="cursor-pointer text-[#7727B3] hover:text-[#C431A3]"/>
    </span>
    <div className="flex justify-center items-center col-span-6">
      <input 
        className="cursor-pointer w-full h-14 rounded-lg pl-4 focus:border-2 focus:outline-none"
        type="text"
        placeholder="Escreva sua mensagem" 
      />
    </div>
    <div className="flex justify-center items-center">
      <button
        className="transition duration-300 hover:scale-x-110 p-2 rounded-lg bg-[#7727B3] hover:bg-[#C431A3]"
        >
        <ArrowBigRight className="w-10 text-white"/>
      </button>
    </div>
  </section>
  )
}