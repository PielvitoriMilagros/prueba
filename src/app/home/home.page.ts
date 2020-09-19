import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarioActivo;
  public usuario;

  constructor(private route: ActivatedRoute,private router: Router, private authService:AutenticacionService) {

    authService.currentUser().then(resp=>{
      this.usuario = resp;
      this.usuarioActivo = true;
      this.usuario=this.usuario.email;


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

}
