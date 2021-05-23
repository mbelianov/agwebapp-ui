export default (state, action) => {
  //console.log("previous state in reducer: ", state)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        error: false,
        message:"",
        user: action.payload
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
      case "SET_AUTHPROVIDER":
        return {
          ...state,
          auth_provider: action.payload
        };      
    default:
      return state;
  }
};