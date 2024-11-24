import dotenv from 'dotenv'    // Import Dependencis
import express from 'express'; // 
import cors from 'cors'        // 
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config() // Dot Env Import 

const app = express() // Express App
const port = process.env.PORT || 3000 // PORT
const mongoDBUri = process.env.MONGO_DB_URI // Mongo DB URi

const client = new MongoClient(mongoDBUri, { // Mongo Db Client
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.use(cors())
app.use(express.json())

;(async () => {
    try{
        await client.connect()
        console.log(`Mongo Db Connection Succes`)

        app.post('/user', async (req, res) => {
            const body = req.body

            const database = client.db("stackmastery")
            const usersCollections = database.collection("users")

            const result = await usersCollections.insertOne(body)

            res.send(result.insertedId)

        })
    }
    catch(err){
        throw err
        console.log(err)
    }
})();


app.listen(port, () => {
    console.log(`Server Running On ${port}`)
})