import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  if(localStorage.getItem('isLogin') === 'true'){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
