import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthTabsPageRoutingModule } from './auth-tabs.router.module';
import { AuthTabsPage } from './auth-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AuthTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthTabsPageRoutingModule
  ],
  declarations: [AuthTabsPage]
})
export class AuthTabsPageModule {}
