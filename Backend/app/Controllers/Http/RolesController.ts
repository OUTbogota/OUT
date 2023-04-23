import Rol from 'App/Models/Rol';
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
