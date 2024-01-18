import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '../../services/AuthService';
import { RootState } from '../store';

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isVerified: false } as {
    user: null | { name: string }; // TODO: move to types folder or extract types
    token: null | string;
    isVerified: null | boolean;
  },
  reducers: {
    setUser: (state, { payload }: PayloadAction<any | null>) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.jwt_token;
      },
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state.user,
          ...payload,
        };
      },
    );
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentVerificationStatus = (state: RootState) => state.auth.isVerified;
