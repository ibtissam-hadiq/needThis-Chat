import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

 const UserChatCard = () => {
  return (
    <Card>
        <CardHeader avatar={<Avatar  sx={{width:"3.5rem", 
    height:"3.5rem",
    fontSize:"1.5rem", bgcolor:"#191c29", color:"rgb(88,199,250)"
}} src='https://cdn.pixabay.com/photo/2024/05/06/00/38/human-face-8742098_640.jpg'></Avatar>}
action={
    <IconButton>
        <MoreHorizIcon/>
    </IconButton>
} title="codewithzoch" subheader="new message">
        
    </CardHeader>
    </Card>
  )
}
export default UserChatCard
