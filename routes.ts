/**
 * An array of routes that are public
 * these do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/'];

/**
 * An array of routes that are used to autheticate the user
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/portal';
