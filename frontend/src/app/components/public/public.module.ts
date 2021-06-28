import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './register-component/register-component';

@NgModule({
    declarations:[
        HomeComponent,
        RegisterComponent
    ],
    imports: [
        PublicRoutingModule,
        PrimeNgModule,
        FormsModule
    ],
    exports:[

    ],
    providers:[]
})
export class PublicModule { }
