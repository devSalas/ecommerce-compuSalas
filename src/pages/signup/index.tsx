import Form from "../../components/login-signup/Form";
import { useFetchCreateUser } from "../../services/query";
import { Navigate, redirect } from "react-router-dom";
import React from "react";

const interfaz = "signup";

const Signup = () => {
  const { mutate, isLoading, isSuccess, data } = useFetchCreateUser();
  console.log(data);
  if (isSuccess && data?.status === "ok") {
    console.log("entro signup");
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <Form title={"Registrate"} useMutate={mutate} loading={isLoading} />
    </div>
  );
};

export default Signup;
