const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const userFilePath = path.join(__dirname, "..", "user.json");

function readUser(next, callback) {
    fs.readFile(userFilePath, "utf8", (error, contents) => {
        if (error) return next(error);
        try {
            callback(JSON.parse(contents));
        } catch (parseError) {
            next(parseError);
        }
    });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// GET /api/v1/user/profile
router.get("/profile", (req, res, next) => {
    readUser(next, user => res.json(user));
});

// POST /api/v1/user/login
router.post("/login", (req, res, next) => {
    const { username, password } = req.body || {};
    readUser(next, user => {
        if (username !== user.username) {
            return res.json({ status: false, message: "User Name is invalid" });
        }
        if (password !== user.password) {
            return res.json({ status: false, message: "Password is invalid" });
        }
        return res.json({ status: true, message: "User Is valid" });
    });
});

// GET /api/v1/user/logout/:username
router.get("/logout/:username", (req, res) => {
    const username = escapeHtml(req.params.username);
    res.type("html").send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;
