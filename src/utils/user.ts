import Cookies from 'js-cookie';

import { authApi } from '../services/AuthService';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCurrentUser, selectCurrentVerificationStatus, setUser } from '../store/slices/authSlice';

export const useCurrentUser = () => {
  const user = useAppSelector(selectCurrentUser);
  const isVerified = useAppSelector(selectCurrentVerificationStatus);
  const dispatch = useAppDispatch();

  const doLogout = () => {
    dispatch(setUser({ user: null, token: null }));
    Cookies.remove(`jwt_${process.env.DOMAIN_NAME}`, { path: '/' });
    Cookies.remove(`tt_refresh_${process.env.DOMAIN_NAME}`, { path: '/' });
    dispatch(authApi.util.resetApiState());
  };

  return {
    isLogged: Boolean(user),
    isVerified: Boolean(isVerified),
    user,
    doLogout,
  };
};
