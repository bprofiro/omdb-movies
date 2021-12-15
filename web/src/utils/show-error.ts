/* eslint-disable no-unused-expressions */
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const showError = (
  response: AxiosResponse,
  cb?: (cbResponse?: AxiosResponse) => string,
): React.ReactText | void => {
  const { data } = response;

  if (cb && typeof cb === 'function') {
    const message = cb(response);

    if (message) {
      return toast.error(message);
    }
  }

  if (Array.isArray(data) && data.length) {
    return data.forEach(item => {
      item.message && toast.error(item.message);
    });
  }

  const message = data?.error ?? 'Erro interno do servidor';

  return toast.error(message);
};

export default showError;
