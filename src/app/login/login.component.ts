import { Component, Inject, Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword } from "firebase/auth"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn:'root'
})
export class LoginComponent {

  constructor(private auth : Auth) { }

  registrar({email, password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password)
  }
}
