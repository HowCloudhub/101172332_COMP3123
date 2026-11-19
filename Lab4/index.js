const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies.
app.use(express.json());

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// GET /hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=John&lastname=Doe
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.json({ firstname, lastname });
});

// POST /user/John/Doe
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// POST /users with a JSON array of users
app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
