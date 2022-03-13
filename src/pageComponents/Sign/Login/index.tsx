import { Input } from "../../../common-components/TextField/styles";
import { FormFields, Title } from "../styles";

interface IRegisterProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ handleChange }: IRegisterProps) => {
  return (
    <>
      <Title>Login</Title>
      <FormFields>
        <Input
          type="text"
          data-cy="email-login"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="E-mail"
        />
        <Input
          type="text"
          data-cy="password-login"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </FormFields>
    </>
  );
};

export default LoginForm;
