import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegistroComponent } from './home/registro/registro.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'login',component: LoginComponent},
  {path: 'registro',component: RegistroComponent},
  // {path: '',component: HomePage},
  {path:'**', pathMatch:'full' ,redirectTo:'home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
