import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { inject } from '@angular/core'

export const authGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if (authService.isAuth())
    return true
  else {
    // router.navigateByUrl('/login')
    // return false

    const url = router.createUrlTree(['/login'])
    return url
  }
}
