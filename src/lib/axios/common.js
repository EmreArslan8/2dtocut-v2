import { signOut } from '../utils/signOut';

export const defaultAxiosSetup = {
  baseURL: `${process.env.NEXT_PUBLIC_2dtocut_API_URL}`,
  responseType: 'json',
};

export const defaultResponseInterceptor = () => {
  const onSuccess = (response) => {
    return [response?.data, null];
  };

  const onError = (error) => {
    const errorResponse = error.response;
    console.log(errorResponse);

    if (errorResponse.status === 401) signOut();
    if (errorResponse.status === 403) {
      window.open(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/login`, '_self');
    }

    let errObj = {};
    if (!!errorResponse?.data) errObj = errorResponse.data;
    else errObj = { code: 'UNEXPECTED_SERVER_ERROR', details: { ...errorResponse } };

    return [null, errObj];
  };

  return [onSuccess, onError];
};
