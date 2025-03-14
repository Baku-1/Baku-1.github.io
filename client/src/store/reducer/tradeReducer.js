// Initial state for trade reducer
const initialState = {
  trades: [],
  error: null,
  loading: false,
};

// Trade reducer function
const tradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRADES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_TRADES_SUCCESS':
      return {
        ...state,
        loading: false,
        trades: action.payload,
      };
    case 'FETCH_TRADES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_TRADE':
      return {
        ...state,
        trades: [...state.trades, action.payload],
      };
    case 'UPDATE_TRADE':
      return {
        ...state,
        trades: state.trades.map(trade =>
          trade.id === action.payload.id ? action.payload : trade
        ),
      };
    case 'DELETE_TRADE':
      return {
        ...state,
        trades: state.trades.filter(trade => trade.id !== action.payload),
      };
    default:
      return state;
  }
};

export default tradeReducer;
