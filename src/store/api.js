import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/apiCallBegan');
export const apiCallSucceed = createAction('api/apiCallSucceed');
export const apiCallFailed = createAction('api/apiCallFailed');
