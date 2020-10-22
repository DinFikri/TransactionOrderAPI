const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addCustomersRoute = require('./routes/customers/addCustomer')
const getCustomersRoute = require('./routes/customers/getCustomer')
const addOrderLinesRoute = require('./routes/orderLines/addOrderLine')
const getOrderLinesRoute = require('./routes/orderLines/getOrderLine')
const addOrdersRoute = require('./routes/orders/addOrder')
const getOrdersRoute = require('./routes/orders/getOrder')
const addProductsRoute = require('./routes/products/addProduct')
const getProductsRoute = require('./routes/products/getProduct')
const addSellersRoute = require('./routes/sellers/addSeller')
const getSellersRoute = require('./routes/sellers/getSeller')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

app.use(addCustomersRoute)
app.use(getCustomersRoute)
app.use(addOrderLinesRoute)
app.use(getOrderLinesRoute)
app.use(addOrdersRoute)
app.use(getOrdersRoute)
app.use(addProductsRoute)
app.use(getProductsRoute)
app.use(addSellersRoute)
app.use(getSellersRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
