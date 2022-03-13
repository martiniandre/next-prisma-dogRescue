import Link from "next/link";
import { Container, Content, NavAction, UserAction } from "./style";

const Navbar = () => {
  /* const { user, signed } = useContext(SessionContext); */

  return (
    <Container>
      <Content>
        <UserAction>
          <h1>
            <Link href="/">Petsco</Link>
          </h1>
          <div>
            <NavAction href="/dog">See dogs</NavAction>
          </div>
        </UserAction>
        <NavAction data-cy="sign-link" href="/auth/register">
          Sign in/ Sign out
        </NavAction>
        {/* {signed && user ? (
          <h1>Bem vindo, {user?.name} </h1>
        ) : (
          
        )} */}
      </Content>
    </Container>
  );
};

export default Navbar;
