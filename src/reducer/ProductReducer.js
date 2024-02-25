import { ACTION_TYPE } from "../redux/Action-type/ActionTypes";
const GlobalState={
    GetProductData:null,
}
export const reducer=(state=GlobalState,action)=>{
    console.log(state);
    console.log(action);
    switch(action.type){
        case ACTION_TYPE.GETProducts:return{}
        default:
            return state
    }
}