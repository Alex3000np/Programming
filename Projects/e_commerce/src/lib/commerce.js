import Commerce from "@chec/commerce.js";

//takes API key as param
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);