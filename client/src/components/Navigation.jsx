import { Bell, Mail } from "lucide-react"

const Navigation = ({socket}) => {
  return (
    <div className="w-full p-2 h-[6vh] bg-green-900 flex items-center justify-between">
        <h1 className="font-extrabold text-white text-xl">Notify</h1>  
        <div className=" flex gap-6 items-center mr-3 text-white">
            <div className="relative">
                <Bell/>
                <div className="absolute top-[-7px] right-[-2px] h-4 w-4 bg-red-700 rounded-full flex justify-center items-center">
                    <h1 className="text-[0.6rem]">10</h1>
                </div>
            </div>
            <div className="relative">
                <Mail/>
                <div className="absolute top-[-7px] right-[-6px] h-4 w-4 bg-red-700 rounded-full flex justify-center items-center">
                    <h1 className="text-[0.6rem]">10</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navigation
