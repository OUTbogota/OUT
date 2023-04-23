import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Encargado extends BaseModel {
  @column({ isPrimary: true })
  public id_encargado: number

  @column()
  public nombre_apellido_encargado: string

  /*@column()
  public apellido_encargado: string*/

  @column()
  public correo_encargado: string

  @column()
  public cargo_encargado: string

  @column()
  public state: boolean

  @column()
  public id_universidad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
