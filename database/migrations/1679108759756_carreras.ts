import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Carreras extends BaseSchema {
  protected tableName = 'carreras'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_carrera')
      table.string('nombre_carrera', 150).notNullable()
      table.boolean('state').notNullable()
      table.integer('id_universidad').unsigned().references('id_universidad').inTable('universidades').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
