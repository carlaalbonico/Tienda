import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Entidades/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos:Array<Producto>; 
  alerta: string | undefined;
  modificar!:number;
  
  
  constructor() { 
    
    this.Productos=[{idProducto:1, nombreProducto:"Pesas", descProducto:"kdsdsdsfds", precioProducto:2321,categoria:"Pesas"},
    {idProducto:2, nombreProducto:"Pres", descProducto:"kdsdsdsfdsdffds", precioProducto:23465521,categoria:"truba"},
    {idProducto:3, nombreProducto:"ratass", descProducto:"kdasaesffds", precioProducto:2321,categoria:"Pesasadss"}]
    
    this.modificar=-1; 
  
  }

  ngOnInit(): void {
  }
 guardar(idModificar:number){
  this.modificar=-1; 
 }


  modificando(idModificar:number){

    this.modificar=idModificar;
  }

}
