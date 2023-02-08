import { useMutation } from '@tanstack/react-query';

import { fetchCreateUser } from "./Fetch"


export const useFetchCreateUser=()=>{
  return useMutation({mutationFn:fetchCreateUser})
}

