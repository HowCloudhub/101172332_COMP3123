const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || process.env.port || 8081;

// Parse incoming JSON request bodies before routes use req.body.
app.use(express.json());

// Serve the home page at GET /home.
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Mount user routes under /api/v1/user.
app.use("/api/v1/user", userRouter);

// Error handler must be registered after routes and other middleware.
app.use((err, req, res, next) => {
    console.error(err);
    if (res.headersSent) return next(err);
    res.status(500).type("text/plain").send("Server Error");
});

app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`);
});
