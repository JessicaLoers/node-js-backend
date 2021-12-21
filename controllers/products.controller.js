import { v4 as generateUniqueProductId } from 'uuid'
import { loadFromDb, saveToDb } from '../lib/databaseHelpers.js'

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

function postProduct(request, response) {
  const newProduct = { ...request.body, id: generateUniqueProductId() }
  // 1. Lies die Datenbank ein vgl. databaseHelpers.js const database = loadFromDB
  const database = loadFromDb()
  const products = database.products
  // 3. Füge das neue Produkt der Liste an Produkten hinzu (im RAM, dem flüchtigen Speicher)
  products.push(newProduct)
  saveToDb(database)
  // 5. Antwort an den Client/Browser mit dem neu erstellten Product
  response.json(newProduct)
}

export { getProductForm, postProduct }
