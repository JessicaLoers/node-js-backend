import { v4 as generateUniqueCustomerId } from 'uuid'
import { loadFromDb, saveToDb } from '../lib/databaseHelpers.js'


function getCustomerForm(request, response) {
    response.send(`
      <h1>Add a new customer</h1>  
      <form action="/customers" method="POST">
        <input type="text" name="firstname" placeholder="Enter your first name" />
        <input type="text" name="lastname" placeholder="Enter your last name" />
        <input type="text" name="email" placeholder="Enter your email address" />
        <button>Add customer</button>
      </form>
    `);
  }
  
  function postCustomer(request, response) {
    const newCustomer = { 
        ...request.body, 
        id: generateUniqueCustomerId() }
    // 1. Lies die Datenbank ein vgl. databaseHelpers.js const database = loadFromDB
    const database = loadFromDb()
    const products = database.customer
    // 3. Füge das neue Produkt der Liste an Produkten hinzu (im RAM, dem flüchtigen Speicher)
    customers.push(newCustomer)
    saveToDb(database)
    // 5. Antwort an den Client/Browser mit dem neu erstellten Product
    response.json(newCustomer)
  }
  
  export { getCustomerForm, postCustomer };




//   function postCustomer(request, response) {
//     const { firstname, lastname, email } = request.body;
//     response.send(`
//       <h1>A new customer was added</h1>
//       <p>First name: ${firstname}</p>
//       <p>Last name: ${lastname}</p>
//       <p>Email address: ${email}</p>
//       <a href="/customers">Back to form</a>
//     `);
//   }