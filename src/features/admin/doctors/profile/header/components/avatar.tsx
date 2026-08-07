import Image from "next/image"
import { type Avatar } from "../types"

const Avatar = ({avatar_url, fullName}: Avatar) => {
  // Fix the environment variable check
  const baseUrl = process.env.NODE_ENV === "development" 
    ? process.env.NEXT_PUBLIC_API_BASE_URL_DEV 
    : process.env.NEXT_PUBLIC_API_BASE_URL_PROD;

  // Construct the full image URL
  const imageUrl = avatar_url 
    ? `${baseUrl}/file/streamable/images/${avatar_url}` 
    : null;

  return (
    <div className="relative group flex-shrink-0 animate-bounce-in">
      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md overflow-hidden border-3 border-white">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={fullName}
            fill
            className="object-cover"
            unoptimized 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-white font-bold">
              {fullName.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Avatar