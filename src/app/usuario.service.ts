import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, Auth } from "firebase/auth"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   private auth : Auth;
  constructor() { 
    	this.auth= getAuth();
  }
  
  async login(email:string,password:string){
    try{
      return await signInWithEmailAndPassword(this.auth,email,password);
    }
    catch(Error){
      console.log("error en login :" ,Error);
    }
  }
  async register(email:string,password:string){
    try{
      return await createUserWithEmailAndPassword(this.auth,email,password);
    }
    catch(Error){
      console.log("error en registro :" ,Error);
    }
  }

}

