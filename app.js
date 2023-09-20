const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "Welcome to contack book application."});
});
app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
module.exports = app;