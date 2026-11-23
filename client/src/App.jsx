import { useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import { posts } from "./components/data"
import Card from "./components/Card"
import { io } from "socket.io-client"

const App = () => {
  const [userName,setuserName] = useState("")
  const [user,setUser] = useState("")
  const [socket,setSocket] = useState(null)
  useEffect(() => {
   setSocket(io('http://localhost:3000'))
  },[])
  return (
    <div className="w-full h-[100vh] bg-stone-50 flex justify-center items-center">
      <div className="w-[25%] bg-white shadow-md rounded-md ">
       {
         user ? <div className="flex flex-col gap-4">
           <Navigation socket={socket}/>
           {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user}/>
          ))}
         </div> 
         :
          <div className="max-w-md p-4">
            <h1 className="text-gray-600 font-extrabold text-center">Notification</h1>
            <input type="text" placeholder="username" value={userName} onChange={(e) => setuserName(e.target.value)} className="w-full border-gray-400 p-2 text-sm text-gray-600 border rounded-md"/>
            <button onClick={() => setUser(userName)} className="w-full mt-2 p-2 bg-stone-400 font-extrabold rounded-md cursor-pointer">Login</button>
          </div> 
       }  
      </div>      
    </div>
  )
}

export default App
