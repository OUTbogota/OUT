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
      console.log("ESTA ENTRANDO EN CREAR")
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
      console.log(error);
      response.status(400).send({mensaje: 'El usuario ya existe'})
    }
  }

  public async loginUsuario({ request,response}) {
    const {email, password} = request.all()
    try{
      const user = await Usuario.findBy('email', email);
      if(!user) {
        throw new Error('Credenciales incorrectas');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if(!isPasswordValid) {
        throw new Error('Credenciales incorrectas');
      }

      const payload = {
        email: user.email,
        id: user.id
      }

      const token = this.generarToken(payload)

      return response.status(200).json({
        mensaje: 'Usuario logueado correctamente',
        token: token,
        email: user.email
      })

    } catch(error){
      console.log(error);
      return response.unauthorized('Credenciales incorrectas')

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

  public  generarToken(payload: any){
    const token = jwt.sign(payload, Env.get('JWT_SECRET_KEY'), {
      expiresIn: "60 minutes"
    })
    return token
  }

  public obtenerPayload(authorizationHeader: string) {
    let token = authorizationHeader.split(' ')
    const payload = jwt.verify(token, Env.get('JWT_SECRET_KEY'), {complete: true}).payload
    return payload
  }

}
