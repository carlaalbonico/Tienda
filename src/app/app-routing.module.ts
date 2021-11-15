import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { ValidadorGuard } from './helpers/validador.guard';

const routes: Routes = [
  
  {
    path: 'login', component: LoginComponent  ,
  },
  {
    path: 'signin', component: SigninComponent
  },  
  {
    path: 'home', component: HomeComponent, 
  }, 
  
  {
    path:'contacto', component: ContactoComponent,
  },
 
{
  path:'productos',component: ProductosComponent, canActivate:[ValidadorGuard],
    //children:[{path:'nuevo', component:NuevoProductoComponent, canActivate:[ValidadorGuard]}]
  },
  {path:'nuevo', component:NuevoProductoComponent, canActivate:[ValidadorGuard]},
  //ruta vacia
  {
    path:'',
    redirectTo:'admin',
    pathMatch:'full'
  },
  //ruta comodin
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
