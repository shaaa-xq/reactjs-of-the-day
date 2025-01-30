import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

}