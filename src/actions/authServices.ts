import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ token }: { token: string }) => {
  //   console.log(accessToken);
  return setToLocalStorage("token", token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("token");
  //   console.log(authToken);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
    };
  }
};


export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("token");
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage("token");
};
