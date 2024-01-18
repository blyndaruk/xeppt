import Cookies from 'js-cookie';

import { JWTResponse } from '../types/Auth';

export function setJWTCookie(token: JWTResponse) {
  Cookies.set(`jwt_${process.env.DOMAIN_NAME}`, token.access_token, {
    expires: new Date(new Date().getTime() + token.ttl * 1000),
    path: '/',
    secure: true,
  });

  Cookies.set(`tt_refresh_${process.env.DOMAIN_NAME}`, 'true', {
    expires: new Date(new Date().getTime() + 15 * 60 * 1000), // expires in 15 minutes
    path: '/',
    secure: true,
  });
}
