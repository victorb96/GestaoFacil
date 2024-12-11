import { CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('usuario') === null;
};
