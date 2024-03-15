import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { OtherHomeComponent } from './pages/other-home/other-home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'other-home', component: OtherHomeComponent },
    { path: '**', component: NotFoundComponent },
]
