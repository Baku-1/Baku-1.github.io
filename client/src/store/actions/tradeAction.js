// actions/tradeActions.js

export const fetchTradesRequest = () => ({
  type: 'FETCH_TRADES_REQUEST',
});

export const fetchTradesSuccess = (trades) => ({
  type: 'FETCH_TRADES_SUCCESS',
  payload: trades,
});

export const fetchTradesFailure = (error) => ({
  type: 'FETCH_TRADES_FAILURE',
  payload: error,
});

export const addTrade = (trade) => ({
  type: 'ADD_TRADE',
  payload: trade,
});

export const updateTrade = (trade) => ({
  type: 'UPDATE_TRADE',
  payload: trade,
});

export const deleteTrade = (tradeId) => ({
  type: 'DELETE_TRADE',
  payload: tradeId,
});
