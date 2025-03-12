const initialState = {
      token: null,
        user: null,
        };

        const authReducer = (state = initialState, action) => {
          switch (action.type) {
              case 'REGISTER_USER':
                  case 'LOGIN_USER':
                        return { ...state, token: action.payload.token, user: action.payload.user };
                            default:
                                  return state;
                                    }
                                    };

                                    export default authReducer;
}