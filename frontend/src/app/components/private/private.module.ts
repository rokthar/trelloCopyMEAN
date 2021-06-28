import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { BoardComponent } from './board-component/board-component';
import { BoardPageComponent } from './board/board.component';
import { ColumnComponent } from './column-component/column-component';
import { MainComponent } from './main/main.component';
import { PrivateRoutingModule } from './private-routing.module';
import { TaskComponent } from './task-component/task-component';


@NgModule({
    declarations:[
        BoardPageComponent,
        MainComponent,
        BoardComponent,
        ColumnComponent,
        TaskComponent
    ],
    imports: [
        PrivateRoutingModule,
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports:[

    ],
    providers:[]
})
export class PrivateModule { }
