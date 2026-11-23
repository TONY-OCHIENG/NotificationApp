import { useState } from "react"

const App = () => {
  const [userName,setuserName] = useState("")
  const [user,setUser] = useState("")
  const [socket,setSocket] = useState("")
  return (
    <div className="w-full h-[100vh] bg-stone-50 flex justify-center items-center">
      <div className="max-w-md bg-white shadow-md p-4 rounded-md">
       {
         user ? <div>
          
         </div> 
         :
          <div className="">
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
