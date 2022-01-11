import { makeActionCreator } from "../utility";
export const SIGNIN = "SIGNIN";
export const signin = makeActionCreator(SIGNIN, "data");
