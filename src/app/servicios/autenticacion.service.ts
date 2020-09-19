import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private auth: AngularFireAuth) { }


  public iniciarSesion(email: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  public registrarCuenta(email:string,pass:string){
    return this.auth.createUserWithEmailAndPassword(email,pass);
   }

  public cerrarSesion(){
    return this.auth.signOut();
  }

  public currentUser(){
    return this.auth.currentUser;
  }

}
