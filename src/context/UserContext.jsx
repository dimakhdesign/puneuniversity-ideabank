// import { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState(() => {
//     const storedUsers = localStorage.getItem("users");
//     return storedUsers ? JSON.parse(storedUsers) : [];
//   });

//   const [currentUser, setCurrentUser] = useState(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const addUser = (userData) => {
//     const exists = users.some((user) => user.email === userData.email);
//     if (exists) {
//       return false;
//     }
//     const updatedUsers = [...users, userData];
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     return true;
//   };

//   const loginUser = (email, password) => {
//     const matchedUser = users.find(
//       (user) => user.email === email && user.password === password
//     );
//     if (matchedUser) {
//       setCurrentUser(matchedUser);
//       localStorage.setItem("currentUser", JSON.stringify(matchedUser));
//       return true;
//     }
//     return false;
//   };

//   const logoutUser = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//   };

//   return (
//     <UserContext.Provider
//       value={{ users, addUser, currentUser, loginUser, logoutUser }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };



import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const loginUser = (user) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
