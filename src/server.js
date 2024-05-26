require("dotenv/config");
require("express-async-errors");

const express = require('express');
const cors = require('cors');

const routes = require("./routes")
const AppError = require('./utils/AppError.js');
const runMigrations = require('./database/sqlite/migrations');
const uploadConfig = require('./configs/upload');

const app = express();
runMigrations();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use((err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    console.error(err);

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
