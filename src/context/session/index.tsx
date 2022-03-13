import { createContext, useState, ReactNode, useEffect } from "react";
import { IUser } from "../../types/User.type";
import { setCookie, parseCookies } from "nookies";
import { RecoverUser } from "../../services/auth";

type ProviderProps = {
  children: ReactNode;
};

type SignInData = {
  user_id: string;
};

type SessionContextType = {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

export const SessionContext = createContext({} as SessionContextType);

export const SessionProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextAuth.token": token } = parseCookies();

    if (token) {
      RecoverUser(token).then((user) => setUser(user));
    }
  }, []);

  async function signIn({ user_id }: SignInData) {
    setCookie(undefined, "nextAuth.token", user_id, {
      maxAge: "21600",
    });
  }

  return (
    <SessionContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </SessionContext.Provider>
  );
};
