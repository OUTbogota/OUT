import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Encargados extends BaseSchema {
  protected tableName = 'encargados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_encargado')
      table.string('nombre_apellido_encargado', 300).notNullable()
      /*table.string('apellido_encargado', 150).notNullable()*/
      table.string('correo_encargado', 150).notNullable().unique()
      table.string('cargo_encargado', 150).notNullable()
      table.boolean('state').notNullable()
      table.integer('id_universidad').unsigned().references('id_universidad').inTable('universidades').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
