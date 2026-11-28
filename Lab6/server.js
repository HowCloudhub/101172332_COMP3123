const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');


// Example: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/notesdb?retryWrites=true&w=majority
const DB_URL = process.env.DB_URL || "mongodb://howlader101_db_user:<password>@ac-ha4ckky-shard-00-00.5h6bnnv.mongodb.net:27017,ac-ha4ckky-shard-00-01.5h6bnnv.mongodb.net:27017,ac-ha4ckky-shard-00-02.5h6bnnv.mongodb.net:27017/notesdb?ssl=true&replicaSet=atlas-4wko9k-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Mount the note routes
app.use('/', noteRoutes);

// Connect to the database
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the database mongoDB");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
