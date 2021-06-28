import { Component } from '@angular/core'
import { UsuarioService } from 'src/services/user.service';

@Component({
    selector: 'register-component',
    templateUrl: './register-component.html',
    styleUrls: ['./register-component.scss']
})

export class RegisterComponent {
    nickname=""; email=""; password=""; repeat_password="";

    constructor(
        private user_service: UsuarioService
    ){}

    registrar_usuario () {
        if(!(this.password === this.repeat_password)) return console.log("Contraseñas no son iguales");
        
        let user = {
            name: this.nickname,
            email: this.email,
            password: this.password
        }
        console.log(user);
        this.user_service.registro_usuario(user).subscribe((resp)=>{
            console.log(resp);
            
        })  
    }
}