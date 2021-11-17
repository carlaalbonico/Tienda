import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './transformaciones/filtro.pipe';
import { FondoDirective } from './directivas/fondo.directive';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ContactoComponent,
    HomeComponent,
    ProductosComponent,
    NuevoProductoComponent, 
    MenuAdminComponent,
    NavbarComponent,
    ProductoComponent,
    FiltroPipe,
    FondoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
