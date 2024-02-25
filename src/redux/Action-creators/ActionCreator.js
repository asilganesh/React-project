import { ACTION_TYPE } from "../Action-type/ActionTypes"
export const GETProductsCreator=(data)=>{
    return{
        type:ACTION_TYPE.GETProducts,
        payload:data
    }
}