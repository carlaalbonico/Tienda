import { FormStyle } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../Entidades/producto';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value:Array<Producto>, filtrando: string):Array<Producto>{


    if(!value) return [];
    if(!filtrando) return value; 
    

    const products =[]; 
    for( const Producto of value){
      var nombreEnMinuscula= Producto['nombre'].toLowerCase(); 
      if(nombreEnMinuscula.includes(filtrando)){
        products.push(Producto);
      }
    }

    return products;
  }

}
