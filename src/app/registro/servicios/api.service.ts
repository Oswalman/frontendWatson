import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../Modelos/login.model';
import { Usuario } from '../../Modelos/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private usuario = 'https://localhost:44343/api/Usuarios';
  private persona = 'https://localhost:44343/api/Personas';

  public getUsuario(usuario: string, clave: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuario + '/' + usuario + '/' + clave);
  }
  public createPerson(
    personas: Persona,
    usuario: Usuario
  ): Observable<Persona> {
    personas.usuario = usuario;

    return this.http.post<Persona>(this.persona, personas);
  }
}
