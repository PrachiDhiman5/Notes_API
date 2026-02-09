import mongoose from "mongoose";
import express from 'express';
import notes from './model/Notes.js';

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
    .then(()=> console.log("MongoDB Connected!!"))
    .catch(err => console.log(err));


app.post('/notes', async (req, res) =>{
    try{
        const note = await notes.create(req.body);
        res.status(201).json(note);
    }catch(err){
        res.status(400).json({error: err.message})
    }
});

app.get('/notes', async(req, res)=>{
    const note = await notes.find();
    res.status(201).json(note);
});

app.get('/notes/:id', async (req, res)=>{
    const note = await notes.findById(
        req.params.id,
        req.body,
        { new : true }
    );

    res.json(note);
});

app.put("/notes/:id", async (req, res) => {
    const note = await notes.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );

    res.json(note);
});

app.delete("/notes/:id", async (req, res) => {
    const note = await notes.findByIdAndDelete(
        req.params.id,
    );

    res.json(note);
});


app.listen(3000, ()=>{
    console.log("Server listening.....");
})