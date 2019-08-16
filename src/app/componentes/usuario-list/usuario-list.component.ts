import { Component, OnInit } from '@angular/core';
import{DataService}  from '../../services/data.service';
import{IUserForm}  from '../../models/IUserForm';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  pagina_actual:any;
  pagina_siguiente:any;
  pagina_anterior:any;
  pagina_final: any;
  total_paginas: any;
  pagina_inicio: any;

  user: IUserForm = {
    id: '',
    nombre: '',
    apellidopat: '',
    apellidomat: '',
    email: '',
    fchnac: '',
    fchingreso: '',
  }


  private users:IUserForm[];
  constructor(private _userService:DataService, private _router:Router) { 
    this.users = [];
    this.pagina_inicio = '1';
    this.pagina_actual = '1';
    this.pagina_final ='1';
    this.total_paginas ='1';
    this.pagina_siguiente = '1';
    this.pagina_anterior = '1';

    this.user = {
      id: '',
      nombre: '',
      apellidopat: '',
      apellidomat: '',
      email: '',
      fchnac: '',
      fchingreso: '',
    }
  }

  ngOnInit() {
      this._userService.getUsers(this.pagina_actual).subscribe((users)=>{
        console.log(users);
        this.users=users.data;
        this.pagina_actual = users.page;
        this.pagina_final = users.total_pages;
        this.total_paginas = users.total_pages;
        this.pagina_siguiente = (parseInt(users.page) + 1).toString();
        this.pagina_anterior =  (parseInt(users.page) - 1).toString();

      },(error)=>{
        console.log(error);
      })
  }

  listUser(page:string){
    this._userService.getUsers(page).subscribe((users)=>{
      console.log(users);
      this.users = [];
      this.users=users.data;
      this.pagina_actual = users.page;
      this.pagina_final = users.total_pages;
      this.total_paginas = users.total_pages;
      this.pagina_siguiente = (parseInt(users.page) + 1).toString();
      this.pagina_anterior =  (parseInt(users.page) - 1).toString();
    },(error)=>{
      console.log(error);
    })
  }
  

   updateUser(userEdit){  
    
    this.user.id = userEdit.id;
    this.user.nombre = userEdit.first_name;
    this.user.apellidopat = userEdit.last_name;
    this.user.email = userEdit.email;
     this._userService.setter(this.user);

     this._router.navigate(['/op']);


   }
   newUser(){
    let user:IUserForm;
    this._userService.setter(user);
     this._router.navigate(['/op']);
   
   }

}
