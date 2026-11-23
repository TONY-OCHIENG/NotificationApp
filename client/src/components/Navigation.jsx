import { Bell, Mail } from "lucide-react"

const Navigation = ({socket}) => {
  return (
    <div className="w-full p-2 h-[6vh] bg-green-900 flex items-center justify-between">
        <h1 className="font-extrabold text-white text-xl">Notify</h1>  
        <div className="relative flex gap-6 items-center mr-3 text-white">
            <Bell/>
            <Mail/>
        </div>
    </div>
  )
}

export default Navigation
