import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { URL } from 'src/core/url';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    
    constructor( private http: HttpClient){}

    registro_usuario(user){
        return this.http.post(URL.url_user+"registrar",user);
    }

    login(credentials){
        return this.http.post(URL.url_user+"login",credentials);
    }
}