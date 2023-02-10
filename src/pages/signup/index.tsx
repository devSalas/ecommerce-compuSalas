import Form from '../../components/login-signup/Form';
import { useFetchCreateUser } from '../../services/query';
import React from 'react';


const interfaz ="signup"

const Signup=()=> {

  const {mutate,isLoading} = useFetchCreateUser();

  return(
    <div>
      {/* <Form title = {"Registrate"} useMutate={mutate} loading={isLoading}/> */}
    </div>
    )
}

export default Signup;