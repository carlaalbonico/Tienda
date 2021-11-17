import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  newEmail!:string;
  newPass!:string;
  newPass2!:string;
  alerta!:string;
  btnHabilitado!:boolean;
  usuario!:Usuario;
  presentacion={
    "position": "relative",
    "padding": ".75rem 1.25rem",
    "margin-bottom": "1rem",
    "border": "1px solid transparent",
    "border-radius": "0.25 rem",
    "background-color": "grey",
    "color": "white"
    
  }

  constructor(private api:ApiService) { 
    this.btnHabilitado =true;//deshabilitado 
    this.alerta='ingrese email y contraseña que debe contener un mínimo 8 caracteres al menos una letra mayúscula, una minúscula y un número'
  }

  ngOnInit(): void {
  }

  validar() {
    var pattEmail = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
    var patt = new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/);
    var resultado = patt.test(this.newPass);
    var resultado2 = patt.test(this.newPass2);
    var resultadoEmail = pattEmail.test(this.newEmail);
  
    if (resultadoEmail && resultado && resultado2 ) {
      this.btnHabilitado =false;
      
    } else {
      this.btnHabilitado = true;//deshabilitado

    }
  }

  enviar(){
    this.btnHabilitado=false;

    if(this.newPass==this.newPass2){
      let datos = new FormData();
      datos.append("user", this.newEmail);
      datos.append("pass", this.newPass);
      this.api.enviarDatosPostSignIn(datos).subscribe( respuesta => {
        this.funcionARealizar(respuesta);
        
      });
    } else {
      
      this.alerta = "Las contraseñas no coinciden";
      this.newPass = "";
      this.newPass2 = "";
      this.presentacion = {
        "position": "relative",
        "padding": ".75rem 1.25rem",
        "margin-bottom": "1rem",
        "border": "1px solid transparent",
        "border-radius": "0.25 rem",
        "background-color": "#dc3545",
        "color": "white"
        
      }
    }
  }
    funcionARealizar(respuesta:Object){
      this.usuario = <Usuario>respuesta;
     
      this.alerta = "Usuario generado correctamente";

      this.presentacion = {
        "position": "relative",
        "padding": ".75rem 1.25rem",
        "margin-bottom": "1rem",
        "border": "1px solid transparent",
        "border-radius": "0.25 rem",
        "background-color": "#28a745",
        "color": "white"
        
      }
      
    }
  


}

