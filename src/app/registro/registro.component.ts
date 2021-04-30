import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { ApiService } from './servicios/api.service';
import { Usuario } from "../Modelos/user.model";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;

  usuario : Usuario={
    clave:"",
    username:"",
    fechaCreacion:new Date()

  };
  hide = true;

  constructor( private apiService: ApiService) {}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      nombres: new FormControl('',),
      apellidos:new FormControl('',),
      documento: new FormControl('',),
      tipoDocumento: new FormControl(''),
      fechaCreacion: new FormControl(new Date()),
      email: new FormControl(''),
      username: new FormControl(''),
      clave: new FormControl(''),
    

    });
  }

  submit() {
    this.usuario.username=this.registerForm.value["username"]
    this.usuario.clave=this.registerForm.value["clave"]
    this.apiService
      .createPerson(this.registerForm.value, this.usuario )
      .subscribe((answer: any) => {
        console.log(answer);
      });
  }
}
