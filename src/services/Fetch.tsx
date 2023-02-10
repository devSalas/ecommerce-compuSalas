import api from "../api/index";

interface PropsCreateUser{
  dataUser:{}
  }

export const fetchCreateUser =async(userData:PropsCreateUser)=>{
  try {
    const {data} =  await api.post("/register",userData)
    return data
    
  } catch (error:any) {
    error.message ="error de servidor"
    error.status=500
    return error
  }


  
}
export const fetchValidateUser =async(userData:PropsCreateUser)=>{
  try {
    const  res = await api.post("/login",userData)
    return res.data

  } catch (error:any) {
    error.message ="error de servidor"
    error.status=500
    return error
  }

}


  