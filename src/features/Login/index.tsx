// import React from "react";
import TextInput from "../../shared/components/TextInput";
// import { StyledForm } from "../Project/Board/IssueDetail/Styles";
import { LoginForm } from "./Styles";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../shared/components/Button";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/users";
import { useAuthStore } from "../../auth/authStore";
import { jwtDecode } from "jwt-decode";

type FormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { setToken, token } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (resp) => {
      console.log(jwtDecode(resp.data.accessToken));
      setToken(resp.data.accessToken);
    },
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutate(data);
  };

  console.log(token);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="Email" {...register("email")} />
      <TextInput label="Password" type="password" {...register("password")} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </LoginForm>
  );
};

export default Login;
