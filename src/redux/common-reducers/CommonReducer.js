import {combineReducers} from "redux";
import {reducer} from "../../reducer/ProductReducer"
export const commonReducers=combineReducers({
    ProductFeature:reducer,
})