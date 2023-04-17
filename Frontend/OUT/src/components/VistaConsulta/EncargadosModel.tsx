export default class Encargado {
  constructor(
  id_encargado: number,
  nombre_encargado: string,
  apellido_encargado: string,
  correo_encargado: string,
  cargo_encargado: string,
  state: boolean,
  id_universidad: number,
	created_at : string,
	updated_at : string
  ) {
    this.id_encargado = id_encargado;
    this.nombre_encargado = nombre_encargado;
    this.apellido_encargado = apellido_encargado;
    this.correo_encargado = correo_encargado;
    this.cargo_encargado = cargo_encargado;
    this.state = state;
    this.id_universidad = id_universidad;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  id_encargado: number;
  nombre_encargado: string;
  apellido_encargado: string;
  correo_encargado: string;
  cargo_encargado: string;
  state: boolean
  id_universidad: number;
	created_at : string
	updated_at : string
}
