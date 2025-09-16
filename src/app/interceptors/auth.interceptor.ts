import { HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('api/auth/login'))
    return next(req);

  const storageService = inject(StorageService);
  const token = storageService.getToken();

  if(token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(authReq);
  }
  
  return next(req);
};
