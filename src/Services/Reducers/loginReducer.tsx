const initialState = {
  isLoggedIn: false,
  user: {},
};

interface LoginAction {
  type: "LOGIN" | "LOGOUT";
  user?: {};
}

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default loginReducer;
