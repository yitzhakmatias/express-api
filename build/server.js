"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./config/db.config"));
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = 3000;
db_config_1.default.sync().then(() => {
    console.log("connect to db");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.get('/', (_req, res) => {
    res.send('test api from api');
});
app.listen(PORT, () => {
    console.log(`server at port ${PORT}`);
});
