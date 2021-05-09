import React, { useContext, useEffect, useReducer } from "react";
import { UserContext } from "./UserContext";
import UserReducer from "./UserReducer";
import AppID from 'ibmcloud-appid-js';

export const useUser = () => {
  const { state, dispatch } = useContext(UserContext);
  return [state, dispatch];
};

export const getAppID = async () => {
  const appID = new AppID();
  //const appID = React.useMemo(() => {return new AppID()}, []);

  try {
    await appID.init({
      clientId: process.env.REACT_APP_APPID_CLIENTID,
      discoveryEndpoint: process.env.REACT_APP_APPID_DISCOVERY_ENDPOINT
    });
  }
  catch (e) {
    console.log("Unabel to initialize AppID.");
    console.log("Error: ", e.message);
    return null;
  }

  return appID;
};

export const parseTokens = (tokens) => {
  let userName = tokens.idTokenPayload.name;
  let accessToken = tokens.accessToken;
  let identityToken = tokens.idToken;
  let accessTokenPayload = tokens.accessTokenPayload;

  return {
    name: userName,
    accessToken: {
      token: accessToken,
      exp: accessTokenPayload.exp
    },
    identityToken: {
      token: identityToken
    },
    isAuthenticated: () => { return (accessToken && (1000 * accessTokenPayload.exp > Date.now())) }
  }

}

let initState = {
  user: {
    name: "no name",
    accessToken: {
      token: "no token",
      exp: 0
    },
    identityToken: {
      token: "no token"
    },
    isAuthenticated: () => { return false }
  },
  auth_provider: null,
  loading: false,
  error: false,
  message: ""
};


export const UserState = ({ children }) => {
  //const appID = React.useMemo(() => {return new AppID()}, []);

  const [state, dispatch] = useReducer(UserReducer, initState);

  useEffect(() => {
    async function restoreUserSession (state) {
      const appID = await getAppID();

      if (appID) {
        try {

          const tokens = await appID.silentSignin();
          state.user = parseTokens(tokens);
          dispatch({
            type: "SET_USER",
            payload: state.user
          });
          dispatch({
            type:"SET_AUTHPROVIDER",
            payload:appID
          })

        }
        catch (e) {
          console.log("silentSignin failed.");
          console.log("Error: ", e.message);
          dispatch({
            type: "SET_ERROR",
            payload: {error:true, message:"silentSignin failed."}
          })
        }
      }
      else {
        dispatch({
          type: "SET_ERROR",
          payload: {error:true, message:"Unable to initialize AppID"}
        })
      }      
    }
    restoreUserSession(initState);

  }, [])

  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};