import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Carrera extends BaseModel {
  @column({ isPrimary: true })
  public id_carrera: number

  @column()
  public nombre_carrera: string

  @column()
  public state: boolean

  @column()
  public id_universidad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
