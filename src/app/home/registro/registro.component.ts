import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { environment } from 'src/environments/environment';
import { auth } from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  // public formRegistro: FormGroup;

  public usuarioActivo=false;
  public mostrar=false;
  public mensaje="";

  constructor(private authService: AutenticacionService) { 

    // this.formRegistro = new FormGroup({
    //   email: new FormControl(null, Validators.email),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    // })

  }

  ngOnInit() {

    this.usuarioActivo=false;

    this.authService.currentUser().then(resp=>{
      this.usuarioActivo = true;
    });

  }

  registrarUsuario(usuario,clave){
    this.authService.registrarCuenta(usuario.value, clave.value).then(resp=>{
      resp.user.sendEmailVerification({
        handleCodeInApp: true,
        url: environment.urlVerify
      });

      this.mensaje="Registro dado de alta correctamente."
      this.mostrar=true;

    }).catch(error =>{
      this.mensaje="Error, revisar formato de correo y clave (min. 6 dígitos)"
      this.mostrar=true;
    });

  }

}
