import { v4 as generateUniqueProductId } from 'uuid'
import { loadFromDb, saveToDb } from '../lib/databaseHelpers.js'

const listProducts = (request, response) => {
  const database = loadFromDb()
  response.json(database.products)
}

function postProduct(request, response) {
  const newProduct = { 
    ...request.body,
    id: generateUniqueProductId() }
  
  const database = loadFromDb()
  const products = database.products
 
  products.push(newProduct)
  saveToDb(database)
 
  response.json(newProduct)
}

function getProductForm(request, response) {
  response.send(`
      <form action="/products" method="POST">
        <input type="text" name="productname" placeholder="productname"/>
        <input type="number" name="price" placeholder="price"/>
        <input type="number" name="quanity" placeholder="quantity"/>
        <button>Add product</button>
      </form>
  `);
}

export { getProductForm, postProduct, listProducts }
