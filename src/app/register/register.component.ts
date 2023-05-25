import { Component,  } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { formatPercent } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 usuario= {
    email:'',
    password:''
 }
    constructor(private usuarioService:UsuarioService){}

    registrar(){
      console.log(this.usuario);
      const {email,password}=this.usuario
      this.usuarioService.register(email,password).then(res =>
        alert("usuario registrado"))
    }
}
