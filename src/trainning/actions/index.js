import * as types from '../constants/ActionType';

export const status = () =>{
    return {
        type: types.TOGGLE_STATUS

    }
}

export const soft = (soft) =>{
    return {
        type: types.SOFT,
        soft
    }
}