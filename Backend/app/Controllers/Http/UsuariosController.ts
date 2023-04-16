//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'
import Usuario from 'App/Models/Usuario'
import Rol from 'App/Models/Rol'
import bcrypt from 'bcrypt'


export default class UsuariosController {

  public async createUsuario({request, response}) {
    const {nombre, apellido, email, password, confPassword, rol_id} = request.all()
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)
    try{
      console.log("ESTA ENTRANDO EN CREAR")
      if(nombre != "" && apellido != "" && email != "" && password != ""){
        if(password == confPassword){
          await Usuario.create({
            nombre,
            apellido,
            email,
            password: passwordHash,
            rol_id,
            state: true
          })
          response.status(201).send({mensaje: 'Usuario creado correctamente'})
        }else{
          response.status(400).send({mensaje: 'Las contraseñas no coinciden'})
        }
      }else{
        console.log("Campos vacíos");
        response.status(400).send({mensaje: 'No pueden haber campos vacíos'})
      }
    }catch(error) {
      console.log(error);
      response.status(400).send({mensaje: 'El usuario ya existe'})
    }
  }

  public async index({response}) {
    try{
      const usuarios = await Usuario.all()
      response.status(200).send(usuarios)
    }catch(error) {
      response.status(400).send({mensaje: 'Error al obtener los usuarios'})
    }
  }

  public async delete({params, response}) {

    try{

      const usuario = await Usuario.find(params.id)
      usuario?.delete()
      response.status(200).send({mensaje: 'Usuario eliminado correctamente'})
    }catch(error) {
      console.log(error);
      response.status(400).send({mensaje: 'Error al eliminar el usuario'})
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
        user:{
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          rol: await Rol.find(user.rol_id).then(rol => rol?.nombre_rol)
        }
      })

    } catch(error){
      console.log(error);
      if(error.message == 'Credenciales incorrectas') {
        return response.status(400).json({
          mensaje: 'Credenciales incorrectas'
        })
      }
      return response.status(500).json({"mensaje": "Error en el servidor"})
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
