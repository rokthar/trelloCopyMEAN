import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule),
  },
  {
    path: `user`, loadChildren: () => import('./components/private/private.module').then(m => m.PrivateModule),
  }
]

@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}