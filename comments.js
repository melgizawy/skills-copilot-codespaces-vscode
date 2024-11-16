// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse incoming JSON data
app.use(express.json());

// Create comments array
let comments = [
    {
        id: 1,
        username: "Alice",
        comment: "Hi, I am Alice"
    },
    {
        id: 2,
        username: "Bob",
        comment: "Hello, I am Bob"
    }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send("Comment not found");
    }
});

// Add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newComment = req.body;
    const index = comments.findIndex(c => c.id === id);
    if (index !== -1) {
        comments[index] = newComment;
        res.json(newComment);
    } else {
        res.status(404).send("Comment not found");
    }
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(c => c.id === id);
    if (index !== -1) {
        comments.splice(index, 1);
        res.send("Comment deleted");
    } else {
        res.status(404).send("Comment not found");
    }
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});