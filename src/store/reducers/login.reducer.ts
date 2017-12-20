import * as userActions from './../actions/';
import { User, AppState } from './../models/login.model';

export const initialState: AppState = {
    users: []
};

export function loginReducer(state = initialState, action: userActions.PropertyAction) {
    switch (action.type) {
        case userActions.LOGIN_SUBMIT: {
            return {
                ...state,
            };
        }

        case userActions.LOGIN_SUCESS: {
            const users = action.payload;
            return {
                ...state,
                users
            };
        }

        case userActions.LOGIN_FAIL: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
}

export const getUsers = (state: AppState) => state.users;
