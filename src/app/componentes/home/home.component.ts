import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entidades/producto';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos!:Array<Producto>; 
  alerta: string | undefined;
  

  constructor(private ruteo:Router, private api:ApiService) { 
  
    this.api.enviarConGetMasRuteo("producto/mostrar").subscribe(respuesta => this.productos =<Array<Producto>>respuesta);
    
    console.log(this.productos);
    
    
  }

  
  ngOnInit(): void {
  }

}
