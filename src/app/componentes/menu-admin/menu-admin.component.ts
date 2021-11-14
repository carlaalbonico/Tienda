import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  
  usuarioLogueado!:any; 

  
  constructor(private ruteo:Router) { 
    this.usuarioLogueado =sessionStorage.getItem("usuario"); 
    console.log( this.usuarioLogueado); 
    
  }

  ngOnInit(): void {
    

  }
  salir(){
    sessionStorage.removeItem("usuario");
    this.ruteo.navigate(["/"]);
    console.log('salio'); 
  }

}
