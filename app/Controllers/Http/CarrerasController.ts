import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Carrera from 'App/Models/Carrera'
import { request } from 'http'

export default class CarrerasController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) {

    try {
      const carrera = request.all()
      await Carrera.create(carrera)
      response.ok({msg:'El registro se creó correctamente', data: carrera})
    }
    catch(e){
      response.badRequest('La carrera ya existe en la base de datos')
    }

  }

  public async show({response, params}: HttpContextContract) {

    try {
      const carrera = await Carrera.findOrFail(params.nombre_carrera)
      response.ok({msg:'El registro se halló correctamente', data: carrera})
    }
    catch(e){
      response.badRequest('No se encontró carrera con ese nombre')
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
