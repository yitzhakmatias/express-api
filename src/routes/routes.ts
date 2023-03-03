import express from "express";
import {v4 as uuidv4} from 'uuid';
import {ClientInstance} from "../model/client";
import Validators from "../utilities/validators";

import HandleValidation from "../middleware/handleValidation";
import ClientController from "../controller/clientController";

const router = express.Router();

router.post("/create",
    Validators.checkCreateClient(),
    HandleValidation.HandleValidationError,
    async (req, res) => {
        try {
            const id = uuidv4()
            const record = await ClientInstance.create({...req.body, id})
            return res.json({record, msg: ' record created'});
        } catch {
            //throw new Error('error creating record')
            return res.json({msg: ' fail to create', status: 500, route: "/create"});
        }
    })
router.post("/creates", async (req, res) => {

    try {
        const id = uuidv4()
        const record = await ClientInstance.create({...req.body, id})
        return res.json({record, msg: ' record created'});
    } catch {
        //throw new Error('error creating record')
        return res.json({msg: ' fail to create', status: 500, route: "/create"});
    }


})

router.get('/read', Validators.checkReadTodo(), HandleValidation.HandleValidationError, ClientController.read)

router.get('/read/:id', Validators.checkIdParam(), HandleValidation.HandleValidationError, ClientController.readById)

router.put('/update/:id', Validators.checkIdParam(), HandleValidation.HandleValidationError, ClientController.updateClient)

router.delete('/delete/:id', Validators.checkIdParam(), HandleValidation.HandleValidationError, ClientController.deleteClient)
export default router;