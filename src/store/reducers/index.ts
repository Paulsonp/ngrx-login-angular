import * as fromReducers from './login.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { User, AppState } from './../models/login.model';

export interface ProductsState {
    properties: AppState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    properties: fromReducers.loginReducer,
};

export const getPropertyState = createFeatureSelector<AppState>('property');

export const getAllUsers = createSelector(getPropertyState, (state: AppState) => state.users);
