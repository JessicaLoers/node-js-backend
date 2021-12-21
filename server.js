import express from 'express';

import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);
app.use(customersRoutes);

app.listen(3000, () => console.log('Server is started.'));


// app.use ist immer eine middleware