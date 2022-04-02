import { types } from "../types/types";

export const initialState = 0;

export const counterReducer = (state, action) => {
    switch (action.type) {
            case types.incrementar:
                return state + 1
            case types.descrementar:
                return state - 1
            case types.reset:
                return initialState
         default:
           return state
    }
}