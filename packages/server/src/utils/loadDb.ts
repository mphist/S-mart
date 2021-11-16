import fs from 'fs'
import { addProduct } from '../resolvers/addProduct'
// import { parse } from 'csv-parse'

export function loadDb() {
  const data = JSON.parse(
    fs.readFileSync(
      'C:\\Users\\Owner\\Desktop\\Python\\Sportchek Scraper\\women-boots.json',
      'utf8'
    )
  )
  data.forEach((product: any) => {
    addProduct(
      product.id,
      product.type,
      product.gender,
      product.name,
      product.description,
      product.price,
      product.size,
      product.image,
      product.color
    )
  })
}
