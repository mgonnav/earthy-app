import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth-tabs', pathMatch: 'full' },
  { path: '', loadChildren: './auth-tabs/auth-tabs.module#AuthTabsPageModule' },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'story', loadChildren: './story/story.module#StoryPageModule' },
  { path: 'chatbot', loadChildren: './chatbot/chatbot.module#ChatbotPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
