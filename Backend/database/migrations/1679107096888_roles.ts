import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Roles extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_rol', 40).notNullable()
      table.boolean('state').notNullable()
      table.timestamps(true)
    })

    this.defer(async () => {
      const roles=[
        {nombre_rol: 'admin', state: true},
        {nombre_rol: 'user', state: true}
      ]
      await this.db.table(this.tableName).insert(roles)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
