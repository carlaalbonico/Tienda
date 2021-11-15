import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entidades/producto';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos!:Array<Producto>; 
  alerta: string | undefined;
  modificar!:number;

  constructor(private ruteo:Router, private api:ApiService) { 
  
    this.api.enviarConGetMasRuteo("producto/mostrar").subscribe(respuesta => this.Productos =<Array<Producto>>respuesta);
    this.modificar=-1; 

    console.log(this.Productos);
    console.log(this.modificar);
    
  }

  ngOnInit(): void {
  }


 guardar(nombre:string, descrip:string, precio:string, categoria:string, id:number){
  this.modificar=-1; 

  console.log(nombre, descrip,precio, categoria); 
  let datos = new FormData();
    datos.append("nombre", nombre);
    datos.append("descrip", descrip);
    datos.append("precio", precio);
    datos.append("categoria", categoria);

    this.api.enviarDatosPostConRuteoString("producto/"+id,datos).subscribe( respuesta => {
      this.funcionARealizar(respuesta);
      
    });
 }


  modificando(idModificar:number){
    this.modificar=idModificar;
  }
  
  borrar( id:number){
    
    if (confirm("¿Está seguro de borrar este producto?")) {
    
      this.api.enviarDatosGetConRuteoString("producto/borrar/"+id).subscribe( respuesta => {
        this.funcionARealizar(respuesta);
        
      });
    }
   }

  funcionARealizar(respuesta:any) {
    //muestra la respuesta tipo texto!
      this.alerta = respuesta;
     console.log(respuesta);
  }

}
