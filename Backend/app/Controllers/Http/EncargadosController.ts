import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encargado from 'App/Models/Encargado'
import Universidad from 'App/Models/Universidad'
import Database from '@ioc:Adonis/Lucid/Database'


export default class EncargadosController {
  public async index({ response}: HttpContextContract) {
    try {
      const datos = await Database.query().from('universidades')
      .leftJoin('encargados', 'universidades.id_universidad', '=', 'encargados.id_universidad')
      .select('encargados.id_encargado','encargados.nombre_apellido_encargado','encargados.correo_encargado','encargados.cargo_encargado','universidades.nombre_universidad')
      console.log(datos)
      console.log("hola")
      response.ok(datos)
    } catch (e) {
      response.badRequest({ mensaje: "ocurrio un error"})      
    }
  }

  //public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    try {
      const {nombre_encargado,apellido_encargado,correo_encargado,cargo_encargado,id_universidad} = request.all()
      if(nombre_encargado != "" && apellido_encargado != "" && correo_encargado != "" && cargo_encargado != "" && id_universidad != ""){
        const nombre_u = id_universidad;
        const uni = await Universidad.findBy("nombre_universidad",nombre_u);
        if(uni){
          await Encargado.create({
            nombre_apellido_encargado:(nombre_encargado + ' ' + apellido_encargado).toUpperCase(),
            correo_encargado,
            cargo_encargado:cargo_encargado.toUpperCase(),
            id_universidad:uni.id_universidad,
            state:true,
          });
          response.ok({ mensaje: "El encargado se registro correctamente"})
        }

      } else {
        response.status(400).send({mensaje: 'No pueden haber campos vacíos'})
      }

    } catch (e) {
      console.log(e);
      response.status(400).send({mensaje: 'El encargado ya se encuentra registrado'})
    }
  }

  public async showNombre({response, params}: HttpContextContract) {
    try{
      console.log("show")
      console.log(params)
      const nombre_encargado = decodeURIComponent(params.nombre).toUpperCase();
      console.log(nombre_encargado);
      const datos = await Database.query().from('universidades')
          .leftJoin('encargados', 'universidades.id_universidad', '=', 'encargados.id_universidad')
          .select('encargados.id_encargado','encargados.nombre_apellido_encargado','encargados.correo_encargado','encargados.cargo_encargado','universidades.nombre_universidad')
          .where('encargados.nombre_apellido_encargado','LIKE',`%${nombre_encargado}%`)
        if(datos){
          response.ok({ mensaje: "Se encontro encargado con ese nombre", data: datos})
        } else {
          response.ok({ mensaje: "No se encontro encargado con ese nombre"})
        }
    }
    catch(e){
      response.badRequest({ mensaje: "No se encontro encargado con ese nombre"})
    }
  }

  public async showUni({response, params}: HttpContextContract) {
    try{
      console.log("show");
      console.log(params);
      const nombre_universidad = decodeURIComponent(params.nombre).toUpperCase();
      
      console.log(nombre_universidad);
      /*const uni = await Universidad.findBy("nombre_universidad",nombre_universidad);*/

      const uni = await Universidad.query()
      .where('nombre_universidad', 'LIKE', `%${nombre_universidad}%`);

      if(uni){
        const datos = await Database.query().from('universidades')
          .leftJoin('encargados', 'universidades.id_universidad', '=', 'encargados.id_universidad')
          .select('encargados.id_encargado','encargados.nombre_apellido_encargado','encargados.correo_encargado','encargados.cargo_encargado','universidades.nombre_universidad')
          .where('universidades.nombre_universidad', 'LIKE', `%${nombre_universidad}%`)
        if(datos){
          response.ok({ mensaje: "Se encontro", data: datos})
        } else {
          response.ok({ mensaje: "No se encontro encargado con esa universidad"})
        }
        
      } else {
        response.ok({ mensaje: "No se encontro esa universidad"})
      }

    }
    catch(e){
      response.badRequest({ mensaje: "Error en el servidor"})
    }
  }

  //public async edit({}: HttpContextContract) {}

  //public async update({}: HttpContextContract) {}

  //public async destroy({}: HttpContextContract) {}
}
