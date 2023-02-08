import React from 'react';
import Form from '../../components/login-signup/Form';
import { useFetchCreateUser } from '../../services/query';


const interfaz ="signup"

const Signup=()=> {

  const {mutate,isLoading} = useFetchCreateUser();



  return(
    <div>
      <Form title = {"Registrate"} useMutate={mutate} loading={isLoading}/>
    </div>
    )
}

export default Signup;