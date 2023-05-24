import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import { UserContextType } from "../models/context/UserContextType";
import { User } from "../models/User";
import {ACCESS_TOKEN, CLINIC_ID, CLINIC_NAME} from "../constants/constants";
import { UserApi } from "../api/UserApi";
import jwt_decode from "jwt-decode";
import {NavbarContext} from "./NavbarContext";
import {UnLoginPages} from "../models/pages/UnLoginPages";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const defaultSettings: UserContextType = {
  currentUser: null,
  userModifier: (user: User | null) => {},
};

export const UserContext = createContext<UserContextType>(defaultSettings);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const {pagesModifier } = useContext(NavbarContext);
  const navigate = useNavigate();

  const userModifier = (user: User | null) => {
    setCurrentUser(user);
  };

  const fetchUser = useCallback(async () => {
    try {
      const user = await UserApi.getUser();
      userModifier({
        email: user.data.email,
        roles: user.data.roles,
      });
    }catch (error){
      toast.error("Bład serwera")
    }

  }, []);


  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && !currentUser) {
      const decodedToken = jwt_decode(token) as any;
      const tokenExp = decodedToken.exp as number;
      const currentTimestamp = Math.round(Date.now() / 1000);

      if (tokenExp > currentTimestamp) {
        fetchUser();
      }
      else{
        userModifier(null);
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(CLINIC_NAME)
        localStorage.removeItem(CLINIC_ID)
        pagesModifier(UnLoginPages);
        navigate("/login")
      }
    }
  }, [fetchUser, currentUser,pagesModifier,navigate]);

  return (
    <UserContext.Provider value={{ currentUser, userModifier }}>
      {children}
    </UserContext.Provider>
  );
};


