import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

 //Aquí van las variables
 public editar:boolean = false;
 public user: any = {};
 public array_user: any[] = [];
 //Para contraseñas
 public hide_1: boolean = false;
 public hide_2: boolean = false;
 public inputType_1: string = 'password';
 public inputType_2: string = 'password';
 //Para detectar errores
 public errors:any ={};


 constructor(
   private location: Location,
   private usuariosService: UsuariosService,
   private router: Router
 ) { }

 ngOnInit(): void {
 }

 public regresar(){
   this.location.back();
 }



 //Funciones para password
 showPassword()
 {
   if(this.inputType_1 == 'password'){
     this.inputType_1 = 'text';
     this.hide_1 = true;
   }
   else{
     this.inputType_1 = 'password';
     this.hide_1 = false;
   }
 }

 showPwdConfirmar()
 {
   if(this.inputType_2 == 'password'){
     this.inputType_2 = 'text';
     this.hide_2 = true;
   }
   else{
     this.inputType_2 = 'password';
     this.hide_2 = false;
   }
 }


 //Función para detectar el cambio de fecha
 //Para la fecha


}