import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Entidades/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto!:Producto;
  @Input() nombre!:string;
  @Input() descrip!:string;
  @Input() precio!:string;
  @Input() categoria!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
