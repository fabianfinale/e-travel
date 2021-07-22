import axios from 'axios';
import * as apiActions from '../api';

const apiMiddleware = (store) => (next) => async (action) => {
  console.log(`store`, store);
  console.log(`next`, next);
  console.log(`action`, action);
  if (action.type !== apiActions.apiCallBegan.type) return next(action);

  const { dispatch } = store;
  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:5000',
      url,
      method,
      data,
    });

    dispatch(apiActions.apiCallSucceed(response.data));

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(apiActions.apiCallFailed(error.message));

    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiMiddleware;
