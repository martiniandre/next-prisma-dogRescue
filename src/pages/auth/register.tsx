import { FormEvent, useState } from "react";
import { IRegister, UserType } from "../../types/registerUser.type";
import { Register as RegisterService } from "../../services/auth";
import {
  Button,
  Container,
  Form,
  FormContainer,
} from "../../pageComponents/Sign/styles";
import RegisterForm from "../../pageComponents/Sign/Register";

const INITIAL_STATE = {
  complement: "",
  district: "",
  email: "",
  name: "",
  password: "",
  street: "",
  street_number: "",
  type: UserType.USER,
};

export default function Registe() {
  const [registerData, setRegisterData] = useState<IRegister>(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { status, data } = await RegisterService(registerData);
    if (status === 400) return setErrors("message");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleRegister}>
          <RegisterForm handleChange={handleChange} />
          <Button>Register now</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
