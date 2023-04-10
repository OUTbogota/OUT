import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: "name"} )
  public nombre: string

  @column({columnName: "lastname"} )
  public apellido: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public state: boolean

  @column()
  public rol_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
