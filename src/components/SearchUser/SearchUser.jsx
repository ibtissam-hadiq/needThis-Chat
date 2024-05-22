// import { Avatar, Card, CardHeader } from '@mui/material'
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// //import {searchUser} from '/auth.action';
// const SearchUser = ()=> {
//    const [username,setUsername]=useState("");
//    const dispatch= useDispatch(); 
//    const {message}=useSelector((store)=>store);

//     const handleSearchUser=( )=>{
//        setUsername(e.target.value);
//         console.log("search user ....")
   
//       // dispatch(SearchUser(username))
//     }
//     const handleClick=(id)=>{
//         setUsername("")
//         console.log(id) 
//     }
//   return (
//     <div>
//         <div className='py-5 relative'>
//              <input  className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full ' 
//              placeholder='sreach user...' 
//               onChange={handleSearchUser}
//                type="text" />
//                {
//                   //{message.auth.searchUser.map((item)=>
//             // <Card key={item.id} className='absolute w-full z-10 top-[4.5rem] cursor-pointer '>
//               ////    <CardHeader onClick={()=>{handleClick(1)}}
//                //   avatar={<Avatar src='https://cdn.pixabay.com/photo/2023/10/19/23/40/wallpaper-8327848_640.jpg'/>}
//                 //   title="ayoub hadiq"
//                   //</Card>  subheader={"ayoub hadiq"}></CardHeader>
//               //</Card>)}
//               //to replace this:
//             username && <Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer '>
//                 <CardHeader onClick={()=>{handleClick(1)}}
//                 avatar={<Avatar src='https://cdn.pixabay.com/photo/2023/10/19/23/40/wallpaper-8327848_640.jpg'/>}
//                  title="ayoub hadiq"
//                   subheader={"ayoub hadiq"}></CardHeader>
//             </Card>

            
//         }
//         </div>
        
//      </div>
//   )
// }

// export default SearchUser;




import { Avatar, Card, CardHeader } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { searchUser } from '/auth.action';

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch(); 
  const { message } = useSelector((store) => store);

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    console.log("search user ....");
    // dispatch(searchUser(username))
  };

  const handleClick = (id) => {
    setUsername("");
    console.log(id);
  };

  return (
    <div>
      <div className='py-5 relative'>
        <input
          className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full'
          placeholder='search user...'
          onChange={handleSearchUser}
          type="text"
          value={username}
        />
        {username && (
          <Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
            <CardHeader
              onClick={() => { handleClick(1) }}
              avatar={<Avatar src='https://cdn.pixabay.com/photo/2023/10/19/23/40/wallpaper-8327848_640.jpg' />}
              title="ayoub hadiq"
              subheader="ayoub hadiq"
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
