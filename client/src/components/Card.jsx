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
        <div className="mt-2 flex gap-2">
            {liked ? (
                <img src='images/heartFilled.svg' className="cursor-pointer" />
                ) : (
                <img
                    src="/images/heart.svg"
                    alt=""
                    className="cursor-pointer h-4 w-4"
                    onClick={() => handleNotification(1)}
                />
           )}
            <img
            src="/images/comment.svg"
            alt=""
            className="cursor-pointer h-4 w-4"
            onClick={() => handleNotification(2)}
            />
            <img
            src="/images/share.svg"
            alt=""
            className="cursor-pointer h-4 w-4"
            onClick={() => handleNotification(3)}
            />
            <img src="/images/info.svg" alt="" className="cursor-pointer h-4 w-4" />
        </div>
    </div>
  )
}

export default Card
