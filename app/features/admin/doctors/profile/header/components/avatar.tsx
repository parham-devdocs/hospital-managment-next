import Image from "next/image"
import { type Avatar } from "../types"

const Avatar = ({avatar_url,fullName}:Avatar) => {
  return (
    <div className="relative group flex-shrink-0 animate-bounce-in">
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md overflow-hidden border-3 border-white">
      {avatar_url ? (
        <Image
          src={avatar_url}
          alt={fullName}
          fill
          className="object-cover"
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center"
        >
          <span className="text-4xl text-white font-bold">
            {fullName.split(' ').map((n: string) => n[0]).join('')}
          </span>
        </div>
      )}
    </div>
    
  
  </div>  )
}

export default Avatar