import { FormEvent, useState } from "react";
/* import { Login, Register } from "../../services/auth"; */
import { Button, Container, Form, FormContainer, ChangeForm } from "./styles";
import { IRegister, UserType } from "../../types/registerUser.type";
import RegisterForm from "./Register";
import LoginForm from "./Login";

const Sign = () => {
  const [activeForm, setActiveForm] = useState("register");
  const [registerData, setRegisterData] = useState<IRegister>({
    complement: "",
    district: "",
    email: "",
    name: "",
    password: "",
    street: "",
    street_number: "",
    type: UserType.USER,
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  /* 
  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { data }  = await Register(registerData)
    if(data.status === 400) return setErrors(data)

    setActiveForm('login')
  } */

  /*   const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { data }  = await Login(loginData)
    if(data.status === 400) return setErrors(data)

    localStorage.setItem('access_token',data.accessToken)
    localStorage.setItem('user',JSON.stringify(data.user))

    window.location.href = '/'
  } */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    activeForm === "register"
      ? setRegisterData({
          ...registerData,
          [name]: value,
        })
      : setLoginData({
          ...loginData,
          [name]: value,
        });
  };

  const changeForm = () => {
    setActiveForm(activeForm === "register" ? "login" : "register");
  };

  return (
    <Container>
      <FormContainer>
        <Form
          activeForm={activeForm}
          /*  onSubmit={activeForm === "register" ? handleRegister : handleLogin} */
        >
          {activeForm === "register" ? (
            <RegisterForm handleChange={handleChange} />
          ) : (
            <LoginForm handleChange={handleChange} />
          )}
          {activeForm === "register" ? (
            <ChangeForm data-cy="change-form" onClick={changeForm}>
              Already have an account?{" "}
            </ChangeForm>
          ) : (
            <ChangeForm data-cy="change-form" onClick={changeForm}>
              Doesn't have an account?
            </ChangeForm>
          )}
          <Button>{activeForm} now</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Sign;
