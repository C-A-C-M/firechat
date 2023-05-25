import { Component, Inject, Injectable } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn:'root'
})
export class LoginComponent {
usuario= {
    email:'',
    password:''
 }
    constructor(private usuarioService:UsuarioService){}

    ingresar(){
      console.log(this.usuario);
      const {email,password}=this.usuario
      this.usuarioService.login(email,password).then(res =>
        alert("usuario registrado"))
    }
}
