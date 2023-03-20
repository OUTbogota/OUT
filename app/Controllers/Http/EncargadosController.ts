import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encargado from 'App/Models/Encargado'
import {request} from 'http'

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

      await Encargado.create(encargado)

      response.ok({ mensaje: "El encargado se registro correctamente", data: encargado})

    } catch (e) {
      response.badRequest({ mensaje: "El encargado ya se encuentra registrado"})
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
