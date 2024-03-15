import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public token: string = 'auth token true'

  isAuth(): boolean {
    return this.token.length > 0
  }


}
