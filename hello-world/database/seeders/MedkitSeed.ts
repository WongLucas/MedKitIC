import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Medkit from 'App/Models/Medkit'
import { readFile } from 'fs/promises'

export default class extends BaseSeeder {
  public async run() {
    const readingFile = (
      await readFile('/home/lucas/Documents/MedKitIC/hello-world/MED.csv')
    ).toString()
    const splitFile = readingFile.split('\n')
    const [header, ...files] = splitFile
    interface medtype {
      TIPO_PRODUTO: string
      NOME_PRODUTO: string
      DATA_FINALIZACAO_PROCESSO: string
      CATEGORIA_REGULATORIA: string
      NUMERO_REGISTRO_PRODUTO: string
      DATA_VENCIMENTO_REGISTRO: string
      NUMERO_PROCESSO: string
      CLASSE_TERAPEUTICA: string
      EMPRESA_DETENTORA_REGISTRO: string
      SITUACAO_REGISTRO: string
      PRINCIPIO_ATIVO: string
    }
    const medOBJ: medtype[] = []

    for (const i of files) {
      const splitFiles = i.split(',')
      let medicamento = {
        TIPO_PRODUTO: splitFiles[0],
        NOME_PRODUTO: splitFiles[1],
        DATA_FINALIZACAO_PROCESSO: splitFiles[2],
        CATEGORIA_REGULATORIA: splitFiles[3],
        NUMERO_REGISTRO_PRODUTO: splitFiles[4],
        DATA_VENCIMENTO_REGISTRO: splitFiles[5],
        NUMERO_PROCESSO: splitFiles[6],
        CLASSE_TERAPEUTICA: splitFiles[7],
        EMPRESA_DETENTORA_REGISTRO: splitFiles[8],
        SITUACAO_REGISTRO: splitFiles[9],
        PRINCIPIO_ATIVO: splitFiles[10],
      }
      medOBJ.push(medicamento)
    }
    await Medkit.createMany(medOBJ)
  }
}
