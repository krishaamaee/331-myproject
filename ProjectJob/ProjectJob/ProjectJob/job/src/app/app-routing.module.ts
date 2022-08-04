import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'wel',
    loadChildren: () => import('./wel/wel.module').then( m => m.WelPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'cash',
    loadChildren: () => import('./cash/cash.module').then( m => m.CashPageModule)
  },
  {
    path: 'prof',
    loadChildren: () => import('./prof/prof.module').then( m => m.ProfPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then( m => m.MailPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'bart',
    loadChildren: () => import('./bart/bart.module').then( m => m.BartPageModule)
  },
  {
    path: 'jan',
    loadChildren: () => import('./jan/jan.module').then( m => m.JanPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./call/call.module').then( m => m.CallPageModule)
  },
  {
    path: 'acc',
    loadChildren: () => import('./acc/acc.module').then( m => m.AccPageModule)
  },
  {
    path: 'field',
    loadChildren: () => import('./field/field.module').then( m => m.FieldPageModule)
  },
  {
    path: 'nurse',
    loadChildren: () => import('./nurse/nurse.module').then( m => m.NursePageModule)
  },
  {
    path: 'crew',
    loadChildren: () => import('./crew/crew.module').then( m => m.CrewPageModule)
  },
  {
    path: 'site',
    loadChildren: () => import('./site/site.module').then( m => m.SitePageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
