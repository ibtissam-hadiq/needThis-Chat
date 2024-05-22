import React from 'react'
import Grid from '@mui/material/Grid';
import WestIcon from '@mui/icons-material/West';
import { Avatar, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import { Photo, VideoCall } from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SearchUser from '../SearchUser/SearchUser';
import UserChatCard from './UserChatCard';
import ChatMessages from './ChatMessages';
const Message = () => {
  const handleSelectImage=() =>{
    console.log("handle select image ...")
  }
  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid item xs={3} className='px-5'>
        <div className='flex h-full justify-between space-x-2'>
            <div className='w-full'>
            <div className='flex space-x-4 items-center py-5'>
          <WestIcon />
          <h1 className='text-xl font-bold'>Home</h1>
        </div>
        <div className='h-[calc(100vh - 83px)] flex flex-col'>
          <div>
            <SearchUser></SearchUser>
          </div>
          <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
            <UserChatCard></UserChatCard>
          </div>
        </div>
      </div>
    </div>
  </Grid>
  <Grid item xs={9} className='h-full'>
    <div>
      <div className='flex  justify-between items-center border-1 p-5'>
        <div className='flex  items-center space-x-3'>
          <Avatar src="https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_1280.png" />
          <p>ibtissam hadiq</p>
        </div>
        <div className='flex  space-x-3'>
           <IconButton>
                <CallIcon />
          </IconButton>
          <IconButton>
                 <VideoCall />
          </IconButton>
        </div>
          <div className='hidScrollbar overflow-y-scroll h-[82vh] px-2'> 
            <ChatMessages></ChatMessages>
            </div>
      </div>
    </div>
    <div className='sticky bottom-0 border-1'>
         <div  className='py-5 flex items-center justify-center space-x-5'>
            <input className='bg-transparent border border-[#3b40544] rounded-full w-[90%]  py-3 px-5  ' placeholder='type message ...' type="text" />
            <input type="file"  accept='images/*' onChange={handleSelectImage} className="hidden" id="image-input"/>
            <label htmlFor="image-input">
              <Photo></Photo>
            </label>
         </div>
    </div>
  </Grid>
</Grid>

    </div>
  )
}

export default Message