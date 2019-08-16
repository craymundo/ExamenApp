import { Component, OnInit } from '@angular/core';
import { IUserForm } from '../../models/IUserForm';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  respuesta : string;
  user: IUserForm = {
    id: '',
    nombre: '',
    apellidopat: '',
    apellidomat: '',
    email: '',
    fchnac: '',
    fchingreso: '',
  }

  constructor(private _userService: DataService, private _router: Router) {
    this.respuesta = '';
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
    console.log( this._userService.getter());
    if ( this._userService.getter() != undefined) {
      this.user=this._userService.getter();
    }else{
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
    
  }

  processForm() {
    if (this.user.id == '') {
      this._userService.createUser(this.user).subscribe((user) => {
        console.log(user);
       this.respuesta = JSON.stringify(user, null, '\t');
      }, (error) => {
        console.log(error);
      });
    } else {
      this._userService.updateUser(this.user).subscribe((user) => {
        console.log(user);

       this.respuesta = JSON.stringify(user, null, '\t');
      }, (error) => {
        console.log(error);
      });
    }
  }

  regresar() {
    this._router.navigate(['/']);
  }
}
