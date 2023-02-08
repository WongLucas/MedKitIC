import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Medkit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public TIPO_PRODUTO: string
  @column()
  public NOME_PRODUTO: string
  @column()
  public DATA_FINALIZACAO_PROCESSO: string
  @column()
  public CATEGORIA_REGULATORIA: string
  @column()
  public NUMERO_REGISTRO_PRODUTO: string
  @column()
  public DATA_VENCIMENTO_REGISTRO: string
  @column()
  public NUMERO_PROCESSO: string
  @column()
  public CLASSE_TERAPEUTICA: string
  @column()
  public EMPRESA_DETENTORA_REGISTRO: string
  @column()
  public SITUACAO_REGISTRO: string
  @column()
  public PRINCIPIO_ATIVO: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
