import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTabsPage } from './auth-tabs.page';

const routes: Routes = [
  {
    path: 'auth-tabs',
    component: AuthTabsPage,
    children: [
      {
        path: 'log-in',
        children: [
          {
            path: '',
            loadChildren: '../log-in/log-in.module#LogInPageModule'
          }
        ]
      },
      {
        path: 'sign-up',
        children: [
          {
            path: '',
            loadChildren: '../sign-up/sign-up.module#SignUpPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/auth-tabs/log-in',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth-tabs/log-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthTabsPageRoutingModule { }
