export const Api_url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const InitialColumnId = "-MrJWseBq4owGg_s87oW";
