import { Input } from "../../../common-components/TextField/styles";
import { FormFields, GridForm, Title } from "../styles";

interface IRegisterProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterForm = ({ handleChange }: IRegisterProps) => {
  return (
    <>
      <Title>Register</Title>
      <FormFields>
        <Input
          type="text"
          data-cy="fullName"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Full name"
        />
        <GridForm>
          <Input
            type="text"
            data-cy="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="E-mail"
          />
          <Input
            type="password"
            data-cy="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </GridForm>
        <GridForm>
          <Input
            type="text"
            data-cy="street"
            name="street"
            id="street"
            onChange={handleChange}
            placeholder="Street"
          />
          <Input
            type="text"
            data-cy="street_number"
            name="street_number"
            id="street_number"
            onChange={handleChange}
            placeholder="Number"
          />
        </GridForm>
        <Input
          type="text"
          data-cy="complement"
          name="complement"
          id="complement"
          onChange={handleChange}
          placeholder="Complement"
        />
        <Input
          type="text"
          data-cy="district"
          name="district"
          id="district"
          onChange={handleChange}
          placeholder="District"
        />
      </FormFields>
    </>
  );
};

export default RegisterForm;
