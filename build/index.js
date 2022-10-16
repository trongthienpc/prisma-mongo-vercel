"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("./services/mongodb");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hi world!");
});
(0, mongodb_1.MongoDbConnection)();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
