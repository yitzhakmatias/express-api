import  express from "express"
import db from "./config/db.config";
import  router from './routes/routes'

const PORT = 3000;

db.sync().then(() => {
    console.log("connect to db")
})

const app = express()
app.use(express.json())

app.use('/api', router);

 app.get('/',(_req, res)=>{

     res.send('test api from api')
 })

app.listen(PORT, () => {
    console.log(`server at port ${PORT}`)
})