import { SET_PERSON_DATA} from "../actions";

export const people = (state = {},action)=>{
    switch(action.type){
        case SET_PERSON_DATA:
            const {person, personData} = action.payload;
            return {...state, person:{personData}};
            break;
        default:
            return state;
            break;
    }
};