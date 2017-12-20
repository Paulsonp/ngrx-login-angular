import { Action } from '@ngrx/store';


export const LOGIN_SUBMIT = '[LOGIN] login submit';
export const LOGIN_SUCESS = '[LOGIN] login sucess';
export const LOGIN_FAIL = '[LOGIN] login fail';

export class LoginSubmit implements Action {
    readonly type =  LOGIN_SUBMIT;
    constructor(public payload?: any) { }
 }
 export class LoginSucess implements Action {
    readonly type = LOGIN_SUCESS;
    constructor(public payload?: any) { }
 }

 export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload?: any) { }
 }

// action type
export type PropertyAction = | LoginSubmit
                             | LoginSucess
                             | LoginFail;
