import { useState } from "react"

const Card = ({post,socket,user}) => {
    const [liked,setLiked] = useState(false)
  return (
   <div className="p-2 w-full flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <img src={post.userImg} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span>{post.fullname}</span>
        </div>

        <img
            src={post.postImg}
            alt=""
            className="w-full aspect-square object-cover h-55"
        />
    </div>
  )
}

export default Card
