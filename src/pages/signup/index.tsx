import Form from '../../components/login-signup/Form';
import { useFetchCreateUser } from '../../services/query';
import Navbar from '../../components/global/navbar';
import { Navigate } from 'react-router-dom';

const interfaz ="signup"

const Signup=()=> {

  const {mutate,isLoading,isSuccess,data} = useFetchCreateUser();

  if(isSuccess && data?.status === 'ok') return <Navigate to="/login" replace={true}/>


  return(
    <div>
      <Navbar title ={"Iniciar Sesión"}/>
      <Form title = {"Registrate"} useMutate={mutate} loading={isLoading}/>
    </div>
    )
}

export default Signup;