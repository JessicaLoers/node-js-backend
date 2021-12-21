import express from 'express';

import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

// app.get('/', (request, response) => {
//   response.json({ status: 'Server is up and running.' });
// });

app.use(productsRoutes);
app.use(customersRoutes);

app.listen(4000, () => console.log('Server is started.'));


// app.use ist immer eine middleware