import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
    mostrar;
    validado="";
    mensaje="";
    public usuarioActivo=false;
    emailVerificado=null;
  
  constructor(private authService: AutenticacionService,private router: Router) { 
    this.usuarioActivo=false;
  }

  ngOnInit() {
    this.authService.currentUser().then(resp=>{
      if(resp != null)
      this.usuarioActivo = true;

    }).catch(error=>{
      this.usuarioActivo = false;

    });
  }

  logOut(){

    this.authService.cerrarSesion().then( resp =>{
      this.usuarioActivo=false;
      this.router.navigate(['/home']);
    });
  }

  validarUsuario(usuario,clave){
    
    this.authService.iniciarSesion(usuario.value,clave.value).then(resp =>{

      console.log(resp);
      let aux=resp;
      
      this.emailVerificado=aux.user.emailVerified;
      if(this.emailVerificado==true){
        this.router.navigate(['/home']);
      } else {
        this.mensaje="Falta verificar la cuenta. Por favor revise su correo";
        this.mostrar=true;
      }

      
    }).catch(error =>{
      console.log(error);
      this.mensaje="Correo o contraseña incorrectos. Favor de verificar.";
      this.mostrar=true;
    });
    

    // if(usuario.value=="admin" && clave.value=="admin")
    // {
    //   this.validado=" correcto!";
    // } else{
    //   this.validado=" incorrecto!"
    // }


    // this.mostrar=true;

  }

}
