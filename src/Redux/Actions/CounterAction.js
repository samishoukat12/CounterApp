import {
    DECREMENT_ACTION,
    INCREMENT_ACTION,
    RESET_ACTION,
} from "../Constants/Type";

export const IncrementHnadler = (data) => {
    return {

        type: INCREMENT_ACTION,
        payload: data

    };
};
export const DecrementHandler = (data) => {
 
    return {

        type: DECREMENT_ACTION,
        payload: data
    };
};
export const ResetHandler = () => {
    return {

        type: RESET_ACTION,

    };
};
