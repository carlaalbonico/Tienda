import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*Un dato de tipo Observable es similar al funcionamiento de AJAX (01:00:50).
    Dentro del método subscribe() va la función anónima que se ejecuta cuando mi petición retorne el response.*/
  
  //this.clienteHttp.get('http://localhost/provincias/Backend/').subscribe( response => {});

  /*
    Cuando estamos en esta API no sabemos que hará la función anónima, para eso podemos retornar el Observable.
    Si retornamos el Observable, quien se va ser cargo de qué hacer con la respuesta será quien llame al método traerConGet()
  */

  constructor(private clienteHttp: HttpClient) { 
    
  }

  traerConGet(){
    this.clienteHttp.get('https://apppushup.herokuapp.com/producto/mostrar'); 
        
  }
  enviarConGetMasRuteo(ruteo:string){
    return this.clienteHttp.get("https://apppushup.herokuapp.com/" + ruteo);
  }

  enviarDatosPostLogin(datos:FormData){
    return this.clienteHttp.post("https://apppushup.herokuapp.com/login",datos, {responseType: 'text'} );
  }

  enviarDatosPostSignIn(datos:FormData){
    return this.clienteHttp.post("https://apppushup.herokuapp.com/signin/enviar", datos);
  }

  enviarDatosPostConRuteo(ruteo:string, datos:FormData){
    return this.clienteHttp.post("https://apppushup.herokuapp.com/" + ruteo, datos);
  }
  enviarDatosPostConRuteoString(ruteo:string, datos:FormData){
    return this.clienteHttp.post("https://apppushup.herokuapp.com/" + ruteo, datos,{responseType: 'text'});
  }
  enviarDatosGetConRuteoString(ruteo:string){
    return this.clienteHttp.get("https://apppushup.herokuapp.com/" + ruteo,{responseType: 'text'});
  }

}
