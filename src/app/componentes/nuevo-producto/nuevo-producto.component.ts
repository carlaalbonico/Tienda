import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  
  newProd!: string; 
  newDesc!:string; 
  newPrecio!: number;
  newCategoria!:string; 
  alerta!: string;

  categorias:Array<string>; 

  constructor() { 

    this.categorias=["Pesas","Bandas","Indumentaria","Estiramiento" ,"Otras"]; 
  }

  ngOnInit(): void {
  }

  guardar(){
    this.alerta= this.newProd+ ' '+this.newDesc+' '+ this.newPrecio+' '

  }

}
