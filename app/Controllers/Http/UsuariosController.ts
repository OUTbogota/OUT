//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'

export default class UsuariosController {

  public async createUsuario({request, response}) {

  }

  public verifyToken(authorizationHeader: string) {
    let token = authorizationHeader.split(' ')
    jwt.verify(token, Env.get('JWT_SECRET_KEY'), (error: any) => {
      if(error) {
        throw new Error('Token inválido')
      }
      return true
    })
  }

  public obtenerPayload(authorizationHeader: string) {
    let token = authorizationHeader.split(' ')
    const payload = jwt.verify(token, Env.get('JWT_SECRET_KEY'), {complete: true}).payload
    return payload
  }

}
