// import React from "react";
import TextInput from "../../shared/components/TextInput";
// import { StyledForm } from "../Project/Board/IssueDetail/Styles";
import { LoginForm, Container } from "./Styles";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../shared/components/Button";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/users";
import { useAuthStore } from "../../auth/authStore";
import { jwtDecode } from "jwt-decode";
import Text from "../../shared/components/Text";
import { toast } from "react-toastify";

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
    onError: () => {
      toast("Unable to login, check inputs and try again.", { type: "error" });
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
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Text weight={500}>Login to PMS</Text>
        <TextInput label="Email" {...register("email")} />
        <TextInput label="Password" type="password" {...register("password")} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </LoginForm>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>
          Welcome to this Project Management System demo!
        </p>
        <p style={{ marginBottom: 15 }}>
          You can log in with the following credentials:
        </p>
        <p>
          <span style={{ fontWeight: "bold", marginRight: 10 }}>email:</span>
          admin@pms.com
        </p>
        <p>
          <span style={{ fontWeight: "bold", marginRight: 10 }}>password:</span>
          admin@pms
        </p>
      </div>
    </Container>
  );
};

export default Login;
