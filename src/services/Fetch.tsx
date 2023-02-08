import api from "../api/index";

interface PropsCreateUser{
  dataUser:{}
  }

export const fetchCreateUser =async(userData:PropsCreateUser)=>{
  const  {data} = await api.post("/register",userData)
  return data
}


  