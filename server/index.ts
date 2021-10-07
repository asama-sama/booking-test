import router from './router';
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors()) // so that app can access
app.use(fileUpload());
app.use(router)

app.listen(3001, () => console.log("app is listening..."))
