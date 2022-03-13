import { createContext, useState, ReactNode, useEffect } from "react";
import { IUser } from "../../types/User.type";

type ProviderProps = {
  children: ReactNode;
};

const initialData = {
  signed: false,
  user: {} as IUser | null,
};

export const SessionContext = createContext(initialData);

export const SessionProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) {
      return setUser(null);
    }
    setUser(JSON.parse(user));
  }, [localStorage]);

  async function signOut() {
    localStorage.clear();
  }

  return (
    <SessionContext.Provider value={{ signed: !!user, user }}>
      {children}
    </SessionContext.Provider>
  );
};
