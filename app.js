const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();  //getting mongodb url and secret key
connectDB();   //calling connectdb() function to connect mongodb

app.use(express.json());

//Route requests to specific Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

//server is listening on porrt 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
