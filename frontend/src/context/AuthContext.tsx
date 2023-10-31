import { Dispatch, SetStateAction, createContext, useState } from "react";

type ValueProp = {
  user: string | undefined;
  setUser: Dispatch<SetStateAction<string | undefined>>;
};

const defaultState: ValueProp = {
  user: undefined,
  setUser: () => {},
};
export const AuthContext = createContext(defaultState as ValueProp);

type ContextProp = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: ContextProp) {
  const [user, setUser] = useState<string | undefined>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
