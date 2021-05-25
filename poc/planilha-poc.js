require('dotenv').config({ path: '../.env.homologacao' })

const fs = require('fs')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('./credenciais.json')

const doc = new GoogleSpreadsheet(
  '1vKvlMb0ZDy3yhxPDmptt-mA525uTFYfeqi4GPfQbtoc'
)

const run = async () => {
  await doc.useServiceAccountAuth({
    client_email: process.env.EMAIL_GOOGLE_API,
    private_key: credenciais.private_key,
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  await sheet.addRows([
    {
      'Pedido': 124,
      'Nome cliente': 'William Lima',
      'Telefone cliente': '55 77777',
      'Produto': 'Trufa y',
      'Quantidade': 11,
      'Subtotal': 25,
      'Total pedido': 25,
      'Status': 'Aguardando pagamento',
    },
  ])
}
run()