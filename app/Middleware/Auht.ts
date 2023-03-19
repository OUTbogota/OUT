import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsuariosController from 'App/Controllers/Http/UsuariosController'

export default class Auht {

  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const authorizationHeader = ctx.request.header('Authorization')
    if(authorizationHeader == undefined) {
      return ctx.response.status(401).send('Falta el token de autorización')
    }
    const token = authorizationHeader

    try{
      const user = new UsuariosController()
      user.verifyToken(token)
      await next()
    }
    catch(error) {
      ctx.response.status(401).send('Token inválido')
    }
  }
}
