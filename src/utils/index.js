import replace from "./replace";

export const IS_PROD = "production" === process.env.NODE_ENV;
export { replace };
