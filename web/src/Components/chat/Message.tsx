import { CheckCheck } from "lucide-react";

type TMessage = {
  message: string
  date: string
}

export function MyMessage(props: TMessage) {
  const aux = props.date.split('T')
  
  // Obtém a data no formato "AAAA-MM-DD" _RPM
  // const date = aux[0].split('').reverse().join('') _RPM

  // Obtém a hora no formato "HH:MM:SS"
  const time = aux[1].split('.')[0].slice(0, 5)
  return (
    <section className="p-3 m-2 flex bg-[#5D80B4] rounded-lg text-white">
      <div className="flex-1 px-1 max-w-[700px]">{props.message}</div>
      <div className="flex items-end gap-2 justify-end px-1">
        <span className="font-light text-xs">{time}</span>
        <span className=""><CheckCheck className="w-3 h-4"/></span>
      </div>

    </section>
  )
}

export function YourMessage(props: TMessage) {
  const aux = props.date.split('T')

  // Obtém a data no formato "AAAA-MM-DD" _RPM
  // const date = aux[0].split('').reverse().join('') _RPM

  // Obtém a hora no formato "HH:MM:SS"
   const time = aux[1].split('.')[0].slice(0, 5) 

  return (
    <section className="flex p-3 m-2 bg-[#EEEDFF] rounded-lg text-[#5D80B4] ">
      <div className="flex-1 px-1">{props.message}</div>
      <div className="flex items-end justify-end px-1">
        <span className="font-light text-xs">{time}</span>
      </div>

    </section>
  )
}