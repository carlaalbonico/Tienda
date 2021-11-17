import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entidades/producto';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  
  newProd!: string; 
  newDesc!:string; 
  newPrecio!: string;
  newCategoria!:string; 
  alerta!: string;
  nuevoProd!:Producto; 
  presentacion!: any;
  

  constructor(private ruteo:Router, private api:ApiService) { 

    //this.categorias=["Pesas","Bandas","Indumentaria","Estiramiento" ,"Otras"]; 
  }

  ngOnInit(): void {
  }

  guardar(){
    
    let datos = new FormData();
    datos.append("nombre", this.newProd);
    datos.append("descrip", this.newDesc);
    datos.append("precio", this.newPrecio);
    datos.append("categoria", this.newCategoria);


    this.api.enviarDatosPostConRuteo("producto/agregar",datos).subscribe( respuesta => {
      this.funcionARealizar(respuesta);
      
    });
  }
  
  funcionARealizar(respuesta:Object){
    this.nuevoProd = <Producto>respuesta;
    this.alerta = "producto agregado correctamente";

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
