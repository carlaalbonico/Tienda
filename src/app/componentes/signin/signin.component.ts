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
      (<HTMLElement>document.getElementById('respuesta')).style.color = '#ff0000';
      this.alerta = "Las contraseñas no coinciden";
      this.newPass = "";
      this.newPass2 = "";
    }
  }
    funcionARealizar(respuesta:Object){
      this.usuario = <Usuario>respuesta;
      (<HTMLElement>document.getElementById('respuesta')).style.color = '#0000ff';
      (<HTMLElement>document.getElementById('respuesta')).style.fontSize = '14px';
      this.alerta = "Usuario generado correctamente";
      
    }
  


}

