//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'
import Usuario from 'App/Models/Usuario'
import bcrypt from 'bcrypt'

export default class UsuariosController {

  public async createUsuario({request, response}) {
    const {nombre, apellido, email, password, rol_id} = request.all()
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)
    try{
      await Usuario.create({
        nombre,
        apellido,
        email,
        password: passwordHash,
        rol_id,
        state: true
      })
      response.status(201).send({mensaje: 'Usuario creado correctamente'})
    }catch(error) {
      response.status(400).send({mensaje: 'El usuario ya existe'})
    }
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
