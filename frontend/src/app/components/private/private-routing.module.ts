import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardPageComponent } from './board/board.component';
import { MainComponent } from './main/main.component';

const routes : Routes = [
  {path:'main', component:MainComponent},
  {path:'board', component:BoardPageComponent}
]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })
  export class PrivateRoutingModule {}