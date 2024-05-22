import { api } from "../../config/api"
import { CREATE_CHAT_REQUEST } from "./message.actionType"
import * as actionType from "/message.actionType"

const createMessage=(message)=>async(dispatch)=>{
    dispatch({type:actionType.CREATE_MESSAGE_REQUEST})
    try{
      const {data}=await api.post(`/api/message`,message);
      console.log("created message",data)
      dispatch({type:actionType.CREATE_MESSAGE_SUCCESS,payload:data})
    }catch(error){
         dispatch({type:actionType.CREATE_CHAT_FAILUER,
            payload:error,
         })
    }
}


const createChat=(chat)=>async(dispatch)=>{
    dispatch({type:actionType.CREATE_CHAT_REQUEST})
    try{
      const {data}=await api.post(`/api/chats`,chat);
      console.log("created chat",data)
      dispatch({type:actionType.CREATE_CHAT_SUCCESS,payload:data})
    }catch(error){
         dispatch({type:actionType.CREATE_CHAT_FAILUER,
            payload:error,
         });
    }
}

const getAllChats=(message)=>async(dispatch)=>{
    dispatch({type:actionType.GET_ALL_CHATS_REQUEST})
    try{
      const {data}=await api.get(`/api/chats/user`,message);
      console.log("get all chats",data)
      dispatch({type:actionType.GET_ALL_CHATS_SUCCESS,payload:data})
    }catch(error){
         dispatch({type:actionType.GET_ALL_CHATS_FAILUER,
            payload:error,
         });
    }
}