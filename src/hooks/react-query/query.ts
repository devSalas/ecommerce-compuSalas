import { useMutation } from "@tanstack/react-query"

import { fetchCreateUser } from "../../services/Fetch"


export const useFetchCreateUser=()=>{
  return useMutation({mutationFn:fetchCreateUser})
}