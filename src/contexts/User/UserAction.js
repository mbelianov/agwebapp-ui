import {getAppID, parseTokens } from "./UserState"

// Set Loading
export const setLoading = (dispatch, status) =>{
  dispatch({ type: "SET_LOADING", payload: status });
}

// Set Error
export const setError = (dispatch, error) =>{
  dispatch({type: "SET_ERROR", payload: { error: error.status, message: error.message }});
}

// Set User (get user info)
export const getUser = async (dispatch) => {
  console.log("in getUser")
  //setLoading(dispatch, true);
  
  try{
    const appID = await getAppID();
    const tokens = await appID.signin();
    const user = parseTokens(tokens);
    dispatch({type: "SET_USER", payload: user});
    //setError(dispatch, { status:false, message: "" });
  }
  catch (e) {
    console.log("Signin failed.");
    console.log("Error: ", e.message);
    //dispatch({type: "SET_ERROR", payload: {error: true, message: e.message }});
    //setError(dispatch, { status:true, message: e.message }); 
  }
};

//attempt to get user info if stored from previous sessions
export const getUserSilently = async (dispatch) => {
  console.log("in getUserSilently")
  //setLoading(dispatch, true);
  try{
    const appID = await getAppID();
    const tokens = await appID.silentSignin();
    const user = parseTokens(tokens);
    dispatch({type: "SET_USER", payload: user});
    //setError(dispatch, { status:false, message: "" });
  }
  catch (e) {
    console.log("silentSignin failed.");
    console.log("Error: ", e.message);
    //dispatch({type: "SET_ERROR", payload: {error: true, message: e.message }});
    //setError(dispatch, { status:true, message: e.message }); 
  }
};
