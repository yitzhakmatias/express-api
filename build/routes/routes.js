"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const client_1 = require("../model/client");
const validators_1 = __importDefault(require("../utilities/validators"));
const handleValidation_1 = __importDefault(require("../middleware/handleValidation"));
const clientController_1 = __importDefault(require("../controller/clientController"));
const router = express_1.default.Router();
router.post("/create", validators_1.default.checkCreateClient(), handleValidation_1.default.HandleValidationError, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const record = yield client_1.ClientInstance.create(Object.assign(Object.assign({}, req.body), { id }));
        return res.json({ record, msg: ' record created' });
    }
    catch (_a) {
        //throw new Error('error creating record')
        return res.json({ msg: ' fail to create', status: 500, route: "/create" });
    }
}));
router.post("/creates", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const record = yield client_1.ClientInstance.create(Object.assign(Object.assign({}, req.body), { id }));
        return res.json({ record, msg: ' record created' });
    }
    catch (_b) {
        //throw new Error('error creating record')
        return res.json({ msg: ' fail to create', status: 500, route: "/create" });
    }
}));
router.get('/read', validators_1.default.checkReadTodo(), handleValidation_1.default.HandleValidationError, clientController_1.default.read);
router.get('/read/:id', validators_1.default.checkIdParam(), handleValidation_1.default.HandleValidationError, clientController_1.default.readById);
router.put('/update/:id', validators_1.default.checkIdParam(), handleValidation_1.default.HandleValidationError, clientController_1.default.updateClient);
router.delete('/delete/:id', validators_1.default.checkIdParam(), handleValidation_1.default.HandleValidationError, clientController_1.default.deleteClient);
exports.default = router;
