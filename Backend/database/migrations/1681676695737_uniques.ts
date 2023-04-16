import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Uniques extends BaseSchema {
  

  public async up () {
    
    this.schema.alterTable('universdades', (table) => {
      table.unique(['nombre_universidad'])
    })

    this.schema.alterTable('encargados', (table) => {
      table.unique(['correo_encargado'])
    })


  }

}
