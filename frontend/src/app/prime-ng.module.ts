import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
    imports:[
        InputTextModule,
        ButtonModule,
        CardModule,
        CheckboxModule
    ],
    exports:[
        InputTextModule,
        ButtonModule,
        CardModule,
        CheckboxModule
    ],  
    bootstrap: [AppComponent]
})
export class PrimeNgModule { }
