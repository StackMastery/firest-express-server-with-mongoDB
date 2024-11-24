import express from 'express'; // Import Dependencis
import dotenv from 'dotenv'    // 
import cors from 'cors'        // 

dotenv.config() // Dot Env Import 

const app = express() // Express App
const port = process.env.PORT || 3000 // PORT

app.use(cors())

app.get('/', (req, res) => {
    res.send('Say Hello')
})


app.listen(port, () => {
    console.log(`Server Running On ${port}`)
})