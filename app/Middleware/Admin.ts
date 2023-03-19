import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsuariosController from 'App/Controllers/Http/UsuariosController'
import Usuario from 'App/Models/Usuario'

export default class Admin {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const authorizationHeader = ctx.request.header('Authorization')
    if(authorizationHeader == undefined) {
      return ctx.response.status(401).send('Falta el token de autorización')
    }
    const token = authorizationHeader
    try{
      const user = new UsuariosController()
      const id = user.obtenerPayload(token)
      const usuario = await Usuario.find(id)

      if(!usuario) {
        return ctx.response.status(401).send('token inválido')
      }
      if(usuario.rol_id != 1) {
        return ctx.response.status(401).send('No tienes permisos para acceder a este recurso')
      }
      await next()
    }catch(error) {
      ctx.response.status(401).send('Token inválido')
    }

  }
}
