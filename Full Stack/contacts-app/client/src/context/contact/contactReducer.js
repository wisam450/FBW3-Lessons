import { 
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT

 } from "../types";

 export default (state , action)=>{
     switch(action.type){
         case  ADD_CONTACT : 
         return {
             ...state,
             contacts : [...state.contacts , action.payload ]
         }
         default: 
         return state;
     }


 }