import axios from "axios";
import AppID from 'ibmcloud-appid-js';

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });

// Set User (get user info)
export const getUser = async (dispatch) => {

  setLoading(dispatch, true);
  setError(dispatch, {status: false, message: "" });
  const appID = new AppID();
  
    try {
      await appID.init({
        clientId: 'ecfbb7a4-afdb-4e62-87f3-42f3761a789a',
        discoveryEndpoint: 'https://eu-de.appid.cloud.ibm.com/oauth/v4/e74febe1-aa69-41be-8bc0-d03062bf5497/.well-known/openid-configuration'
      });
    } 
    catch (e) {
      dispatch({
        type: "SET_ERROR",
        payload: {error: true, message: e.message }
      });
    }
   

  try {
    const tokens = await appID.signin();
    
    let userName = tokens.idTokenPayload.name;
    // set user info
    dispatch({
      type: "SET_USER",
      payload: {name: userName}
    });    
  } 
  catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: {error: true, message: e.message }
    });
  }

  return;
  // do fetch
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => {
      const result = res.data;

      // set user info
      dispatch({
        type: "SET_USER",
        payload: result
      });
    })
    .catch(error => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result
        }
      });
    });
};
