import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  
  return(
    <div className=' h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-br from-[#311942] to-[#7727B3]'>
      <main 
        className='border-2 rounded-xl bg-[#EEEDFF] border-[#bb29af]'
      >
        <section className='p-10'>
          <div className='flex justify-center py-8 rounded-lg bg-purple-950 border-2 border-[#bb29af]'>
            <a className='' href="https://orpen.com.br/" target="_blank">
              <img
                className="drop-shadow-lg hover:drop-shadow-xl"
                src="https://orpen.com.br/assets/img/logo-orpen.png"
                alt="Orpen logo"
                />
            </a>
          </div>
          <div className='p-5'>
            <h1 className='flex justify-center font-extrabold text-6xl text-[#5D80B4] transition duration-300 hover:scale-105'>Erro 404</h1>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#7727B3] transition duration-300 hover:scale-105'>Page</h2>
            <h2 className='flex justify-center font-extrabold text-6xl text-[#bb29af] transition duration-300 hover:scale-105'>Not Found</h2>
          </div>
          <p className="hover:underline m-2 flex justify-center">
            You just hit a route that doesn't exist!
          </p>
        </section>
      </main>
    </div>
  )
}