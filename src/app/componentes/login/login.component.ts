import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;  
  btnHabilitado!: boolean;
  alerta!: string;

  

  //falta ruteo 
  constructor(private ruteo:Router, private api:ApiService) { 
    
    this.alerta='ingrese email y contraseña que debe contener un mínimo 8 caracteres al menos una letra mayúscula, una minúscula y un número'

    this.usuario= new Usuario(); 

    this.btnHabilitado =true; 

    if (sessionStorage.getItem("usuario") != null) {
     this.ruteo.navigate(["/productos"]);
    }

  }

  ngOnInit(): void {
  }

  validar() {
    var pattEmail = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
    var patt = new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/);
    var resultado = patt.test(this.usuario.pass);
    var resultadoEmail = pattEmail.test(this.usuario.email);

    if (resultadoEmail && resultado) {
      this.btnHabilitado = false;
    
    } else {
      this.btnHabilitado = true;
    }
  }

  ingresar(): void {
    
    let datos = new FormData();
    datos.append("user", this.usuario.email);
    datos.append("pass", this.usuario.pass);
    
    this.api.enviarDatosPostLogin(datos).subscribe(
      respuesta => { 
        this.funcionARealizar(respuesta)},
     
    );
  }

  funcionARealizar(respuesta:any) {


    if(respuesta=="Acceso correcto"){//muestra la respuesta tipo texto!
      this.alerta = respuesta;
      sessionStorage.setItem("usuario", this.usuario.email);

      this.ruteo.navigate(['/productos']);}
      else{
        //muestra la respuesta tipo texto!
      this.alerta = respuesta;
      
      }
    
  }


}
