import React, { useState } from "react";

const defaultValue = {
  user: { name: "", loggedIn: false },
  logUserIn: () => {},
};

export const UserContext = React.createContext(defaultValue);

interface IProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [user, setUser] = useState({
    name: "Mu",
    loggedIn: false,
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });

  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
