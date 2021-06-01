import {
    CHANGE_COUNT,
    DECREMENT_ACTION,
    INCREMENT_ACTION,
    RESET_ACTION,
   
} from "../Constants/Type";

export const initialValue = {
    count: 0,
};
export default function CounterReducer(state = initialValue, action) {
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT_ACTION:
            return {
                ...state,
                count: state.count - 1,
            };

        case RESET_ACTION:
            return {
                count: 0,
            };
        case CHANGE_COUNT:
            return {
                count: action.payload,
            };
        default:
            return state;
    }
}
