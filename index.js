const express = require('express');
const app = express();
const cors = require('cors');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
require('dotenv').config();

const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mz9slbl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

async function run() {
    try {
        const postCollection = client.db('todoDB').collection('todos');



    }
    finally {

    }
}

run().catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});