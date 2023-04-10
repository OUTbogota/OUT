import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol';
import { logger } from 'Config/app';
import { log } from 'console';
export default class RolesController {
    
    public async index({response}) {
        try{
            const roles = await Rol.all()
            response.status(200).send(roles)
        }catch(e){
            console.log(e)
            response.status(500).send({mensaje: 'Error al obtener los roles'})
        }
        
    }

}
