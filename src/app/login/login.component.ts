import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { ApiService } from '../registro/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      clave: new FormControl(''),

    });
  }

  
  submit() {
    this.apiService
      .getUsuario(this.loginForm.value['username'],this.loginForm.value['clave'])
      .subscribe((answer: any) => {
        console.log(answer);
      });
  }

}
