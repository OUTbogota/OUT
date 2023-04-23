import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Universidades extends BaseSchema {
  protected tableName = 'universidades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_universidad')
      table.string('nombre_universidad', 400).notNullable().unique()
      table.boolean('state').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
