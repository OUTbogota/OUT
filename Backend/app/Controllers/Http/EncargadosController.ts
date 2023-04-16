import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encargado from 'App/Models/Encargado'
import Universidad from 'App/Models/Universidad'


export default class EncargadosController {
  public async index({ response}: HttpContextContract) {
    try {
      const encargado = await Encargado.all()

      response.ok(encargado)
    } catch (e) {
      response.badRequest({ mensaje: "ocurrio un error"})      
    }
  }

  //public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    try {
      const encargado = request.all()
      if(encargado.nombre_encargado != "" && encargado.apellido_encargado != "" && encargado.correo_encargado != "" && encargado.cargo_encargado != "" && encargado.id_universidad != ""){
        const nombre_u = encargado.id_universidad;
        const uni = await Universidad.findBy("nombre_universidad",nombre_u);
        if(uni){
          encargado.id_universidad = uni.id_universidad;
          encargado.state = true;
          await Encargado.create(encargado);
          response.ok({ mensaje: "El encargado se registro correctamente", data: encargado})
        }

      } else {
        response.status(400).send({mensaje: 'No pueden haber campos vacíos'})
      }

    } catch (e) {
      console.log(e);
      response.status(400).send({mensaje: 'El encargado ya se encuentra registrado'})
    }
  }

  public async show({response, params}: HttpContextContract) {
    try{
      const encargado = await Encargado.findOrFail(params.nombre_encargado)

      response.ok({ mensaje: "Se encontro", data: encargado})
    }
    catch(e){
      response.badRequest({ mensaje: "No se encontro encargado con ese nombre"})
    }
  }

  //public async edit({}: HttpContextContract) {}

  //public async update({}: HttpContextContract) {}

  //public async destroy({}: HttpContextContract) {}
}
