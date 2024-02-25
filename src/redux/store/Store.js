import {createStore} from "redux";
import { commonReducers } from "../common-reducers/CommonReducer";
export const store=createStore(commonReducers,{});