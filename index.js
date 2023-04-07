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
        // const todo = {text: "Hello World", isDone: false};

        // app.get('/', (req, res) => {
        //     res.send('Simple Node server running');
        // });

        // app.get('/todos', async (req, res) => {
        //     const cursor = todoCollection.find({});

        //     const todos = await cursor.toArray();

        //     res.send(todos);
        // });

        // app.post('/todos', async (req, res) => {
        //     console.log('Post Api Called');

        //     const todo = req.body;
        //     const result = await todoCollection.insertOne(todo);

        //     todo._id = result.insertedId;

        //     console.log(result);
        //     res.send(todo);
        // });

        // app.delete('/todos/:id', async (req, res) => {
        //     const id = req.params.id;
        //     console.log(id);
        //     const filter = {_id: new ObjectId(id)};
        //     const result = await todoCollection.deleteOne(filter);
        //     res.send(result);
        // });

        // app.put('/todos/:id', async (req, res) => {
        //     const isDone = req.body.isDone;
        //     console.log(isDone);


        //     const id = req.params.id;
        //     const filter = {_id: new ObjectId(id)};
        //     const options = {upsert: true};
        //     const updatedDoc = {
        //         $set: {
        //             isDone: isDone,
        //         }
        //     };

        //     const result = await todoCollection.updateOne(filter, updatedDoc, options);
        //     res.send(result);
        // });

        // app.put('/edit/:id', async (req, res) => {
        //     const newText = req.body.newText;
        //     console.log(newText);

        //     const id = req.params.id;
        //     const filter = {_id: new ObjectId(id)};
        //     const options = {upsert: true};
        //     const updatedDoc = {
        //         $set: {
        //             text: newText,
        //         }
        //     };

        //     const result = await todoCollection.updateOne(filter, updatedDoc, options);
        //     res.send(result);
        // });
    }
    finally {

    }
}

run().catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});