import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessComponent } from './pages/admin/assess/assess.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewAssessComponent } from './pages/admin/view-assess/view-assess.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { //localhost.com/admin/profile <-- es como la ruta
  path: 'admin',
  component : DashboardComponent,
  canActivate: [AdminGuard],
  children: [ //<-- declaro el componente hijo
    {
      path:'profile',
      component: ProfileComponent
    },
    {
      path:'',
      component: WelcomeComponent
    },
    {
      path:'assess',
      component: AssessComponent
    },
    {
      path:'view-assess',
      component: ViewAssessComponent
    }
  ]
  },
  {
  path: 'user-dashboard',
  component : UserDashboardComponent,
  pathMatch: 'full',
  canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
