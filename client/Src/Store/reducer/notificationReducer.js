const initialState = {
      notifications: [],
      };

      const notificationReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'FETCH_NOTIFICATIONS':
                  return { ...state, notifications: action.payload };
                      case 'ADD_NOTIFICATION':
                            return { ...state, notifications: [...state.notifications, action.payload] };
                                default:
                                      return state;
                                        }
                                        };

                                        export default notificationReducer;
