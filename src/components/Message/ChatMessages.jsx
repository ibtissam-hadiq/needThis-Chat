import React from 'react'

const ChatMessages = () => {
  return (
    <div className={`flex ${true? "justify-start":"justify-end"}text-white`}>
        <div className={`p-1 ${true?"rounded-md": "px-5 rounded-full"} bg-[#191c29] `}>
          {true&& <img  className="w-[20px] h-[17rem] object-cover rounded-md" src='https://cdn.pixabay.com/photo/2024/04/26/18/04/emblem-8722378_640.jpg'/>}
            <p className={`${true? "py-2":"py-1"}`}>message...</p>
        </div>
    </div>
  )
}
export default ChatMessages
