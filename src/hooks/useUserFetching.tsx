import { useEffect } from 'react';

import Cookies from 'js-cookie';

import { setJWTCookie } from '../helpers/cookies';
import { useGetCurrentUserQuery, useRefreshTokenQuery } from '../services/AuthService';
import { useCurrentUser } from '../utils/user';

export function useUserFetching(): [boolean, Function] {
  const { isLogged } = useCurrentUser();
  const token = Cookies.get(`jwt_${process.env.DOMAIN_NAME}`);
  const refreshTokenExists = Boolean(Cookies.get(`tt_refresh_${process.env.DOMAIN_NAME}`));
  const { refetch, isFetching, error } = useGetCurrentUserQuery(null, { skip: !token });

  const { data: newToken } = useRefreshTokenQuery(null, { skip: (!token && !refreshTokenExists) || (token && refreshTokenExists) || !!error || isFetching });

  useEffect(() => {
    if (token) refetch();
  }, [token, refetch]);

  useEffect(() => {
    if (newToken) setJWTCookie(newToken);
  }, [newToken, refetch]);

  return [(isFetching && !isLogged), refetch];
}
