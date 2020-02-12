import { 
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT,
    SET_CURRENT,
    CLEAR_CURRENT
    

 } from "../types";

 export default (state , action)=>{
     switch(action.type){
         case  ADD_CONTACT : 
         return {
             ...state,
             contacts : [...state.contacts , action.payload ]
         }
         case DELETE_CONTACT :
             return {
                 ...state,
                 contacts :state.contacts.filter( item => item.id !== action.payload )
             }
        case SET_CURRENT :
            return {
                ...state,
                current: action.payload
            } 
            case CLEAR_CURRENT :
            return {
                ...state,
                current: null
            } 
            case UPDATE_CONTACT : 
            return {
                ...state,
                contacts :state.contacts.map( item => item.id===action.payload.id ? action.payload :item   )
            }
            case FILTER_CONTACT :
                return {
                    ...state,
                    filtered: state.contacts.filter(  contact => {
                        const regx = new RegExp(`${action.payload}` ,'gi');
                        return contact.name.match(regx) || contact.email.match(regx) || contact.phone.match(regx)
                    }  )
                }
            case CLEAR_FILTER : 
            return {
                ...state ,
                filtered :null
            }    

             
         default: 
         return state;
     }


 }