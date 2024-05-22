//update profile ,get profile ...
//implement seach user logic
const searchUser=(query)=>async(dispatch)=>{
    dispatch({type:actionType.SEARCH_USER_REQUEST})
    try{
      const {data}=await api.get(`/api/users/search?query=${query}`);
      console.log("search user",data)
      dispatch({type:SEARCH_USER_SUCCESS,payload:data})
    }catch(error){
        console.log("-----",error)
         dispatch({type:SEARCH_USER_FAILURE,
            payload:error,
         });
    }
}
