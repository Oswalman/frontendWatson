import { Usuario } from "./user.model";
export interface Persona {
    identificador: string; 
    nombres: string;
    apellidos: string; 
    documento: string; 
    tipoDocumento: string; 
    fechaCreacion: string; 
    usuario:Usuario;

}