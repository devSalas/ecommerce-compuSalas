import { useMutation } from '@tanstack/react-query';

import { fetchCreateUser, fetchValidateUser } from "./Fetch"


export const useFetchCreateUser=()=>{
  return useMutation({mutationFn:fetchCreateUser})
}

export const useFetchValidateUser=()=>{
  return useMutation({mutationFn:fetchValidateUser})
}

