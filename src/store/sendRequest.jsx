import axiosClient from '../api/axiosClient';
import { trackPromise } from "react-promise-tracker";


export const sendRequest = (
  url,
  payload,
  thunkAPI,
  method = 'POST',
  isLoading = true
) => {
  let requestObj = {
    method: method,
    url: url,
    data: payload,
  };
  if (method.toLowerCase() === 'get') {
    requestObj = {
      method: method,
      url: url,
      params: payload,
    };
  }
  try {
    if (isLoading) {
      return trackPromise(axiosClient(requestObj).then((res) => res.data));
    }
    return axiosClient(requestObj).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};
