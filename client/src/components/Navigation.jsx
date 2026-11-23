import { Bell, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const Navigation = ({socket}) => {
    const [notification,setNotification] = useState([])
    const [open, setOpen] = useState(false)
        useEffect(() => {
            socket.on("getNotification", (data) => {
            setNotification((prev) => [...prev, data]);
        });
    },[socket])
    const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">{`${senderName} ${action} your post.`}</span>
    );
  };
  console.log(notification)
  return (
    <div className="relative w-full p-2 h-[6vh] bg-green-900 flex items-center justify-between">
        <h1 className="font-extrabold text-white text-xl">Notify</h1>  
        <div className=" flex gap-6 items-center mr-3 text-white">
            <div className="relative">
                <Bell onClick={() => setOpen(!open)}/>
                {
                    notification.length > 0 && 
                     <div className="absolute top-[-7px] right-[-2px] h-4 w-4 bg-red-700 rounded-full flex justify-center items-center">
                       <h1 className="text-[0.6rem]">{notification.length}</h1>                    
                     </div>
                }
               
            </div>
            <div className="relative">
                <Mail/>
                <div className="absolute hidden top-[-7px] right-[-6px] h-4 w-4 bg-red-700 rounded-full flex justify-center items-center">
                    <h1 className="text-[0.6rem]">10</h1>
                </div>
            </div>
            
        </div>
        {
            open && 
            <div className="absolute p-2 bg-white right-15 top-10 h-[20vh] rounded-lg shadow-xl w-[50%] flex flex-col">
            <p className="text-xs text-gray-600">Notifications</p>
            <hr className="text-gray-500 mt-2"/>
            <div className="overflow-y-auto flex-1">
                 {notification.map((n) => displayNotification(n))}
            </div>
            <button onClick={() => setNotification([])} className="text-xs bg-green-900 text-white font-bold p-1 rounded-md cursor-pointer">Mark as read</button>
        </div>
        }
    </div>
  )
}

export default Navigation
