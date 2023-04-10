import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Universidad from 'App/Models/Universidad'

export default class UniversidadesController {
  public async index({response}: HttpContextContract) {
    try{
      const universidad = await Universidad.all()
      response.ok(universidad)
    }
    catch(e){
      response.badRequest({mensaje:'Ocurrió un error'})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({response,request}: HttpContextContract) {
    try {
      const universidad = request.all()
      await Universidad.create(universidad)
      response.ok({msg:'El registro se creó correctamente', data: universidad})
    }
    catch(e){
      console.log(e);
      response.badRequest({ mensaje:'La universidad ya existe en la base de datos'})
    }
  }

  public async show({response,params}: HttpContextContract) {
    try{
      const universidad = await Universidad.findOrFail(params.nombre_universidad)

      response.ok({ mensaje: "Se encontró", data: universidad})
    }
    catch(e){
      response.badRequest({ mensaje: "No se encontró universidad con este nombre"})
    }
  }
  

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
