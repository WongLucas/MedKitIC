import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'medkits'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('TIPO_PRODUTO')
      table.string('NOME_PRODUTO')
      table.string('DATA_FINALIZACAO_PROCESSO')
      table.string('CATEGORIA_REGULATORIA')
      table.string('NUMERO_REGISTRO_PRODUTO')
      table.string('DATA_VENCIMENTO_REGISTRO')
      table.string('NUMERO_PROCESSO')
      table.string('CLASSE_TERAPEUTICA')
      table.string('EMPRESA_DETENTORA_REGISTRO')
      table.string('SITUACAO_REGISTRO')
      table.string('PRINCIPIO_ATIVO')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
