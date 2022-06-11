const express = require('express')
const app = express()
const cors = require('cors')
// const mg = require('nodemailer-mailgun-transport');
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');
app.use(cors({
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
}))
app.use(express.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3s80f.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 
 


async function run() {
  try {
    await client.connect();
    const projectCollection = client.db("bike-parts").collection('allproject');
    app.get('/allproject',async(req,res)=>{
        const query={}
        const cursor=await projectCollection.find(query).toArray()
        res.send(cursor)
    })
    

    
 
 
     
  } finally {

  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Welcome to Prince Portfolio ')
})

app.listen(port, () => {
  console.log(`Welcome to  port ${port}`)
})