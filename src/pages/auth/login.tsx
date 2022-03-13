import { FormEvent, useContext, useState } from "react";
import { SessionContext } from "../../context/session";
import LoginForm from "../../pageComponents/Sign/Login";
import {
  Button,
  Container,
  Form,
  FormContainer,
} from "../../pageComponents/Sign/styles";
import { LoginService } from "../../services/auth";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const [credentials, setCredentials] = useState(INITIAL_STATE);
  const { signIn } = useContext(SessionContext);
  const [errors, setErrors] = useState({});

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, status } = await LoginService(credentials);
    if (status === 400) return setErrors(status);
    await signIn(data.user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <LoginForm handleChange={handleChange} />
          <Button>Login now</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
