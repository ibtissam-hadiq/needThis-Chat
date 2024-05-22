import { SEARCH_USER_SUCCESS } from "./auth.actionType"

const initialState={
    jwt:null,
    error:null,
    loading:false,
    user:null,
    searchUser:[]
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SEARCH_USER_SUCCESS:
            return {...state,searchUser:action.payload,loading:false,error:null} 
    }
}