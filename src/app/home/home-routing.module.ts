import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'home',component: HomePage},
  {path: 'login',component: LoginComponent},
  {path: 'registro',component: RegistroComponent},
  {path: '',component: HomePage},
  {path:'**', pathMatch:'full' ,redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
