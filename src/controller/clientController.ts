import {ClientInstance} from "../model/client";

class ClientController {
    async read(req, res) {
        try {
            const limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;

            const records = await ClientInstance.findAll({where: {}, limit, offset})
            return res.json({records, msg: ' records'});
        } catch {
            //throw new Error('error creating record')
            return res.json({msg: ' fail to create', status: 500, route: "/create"});
        }
    }
    async readById(req, res) {
        try {
            const {id} = req.params;
            const record = await ClientInstance.findOne({where: {id}})
            return res.json(record);
        } catch {
            //throw new Error('error creating record')
            return res.json({msg: ' fail to create', status: 500, route: "/create"});
        }
    }
    async updateClient(req, res){
        try {
            const {id} = req.params;
            const record = await ClientInstance.findOne({where: {id}})
            if (!record) {
                return res.json({msg: " cab bit find the item"});
            }
            //const client = await record.update({title: record.getDataValue('title')})
            const client = await record.update({title: req.body.title})

            return res.json(client);
        } catch {
            //throw new Error('error creating record')
            return res.json({msg: ' fail to create', status: 500, route: "/update"});
        }
    }
    async deleteClient (req, res){
        try {
            const {id} = req.params;
            const record = await ClientInstance.findOne({where: {id}})
            if (!record) {
                return res.json({msg: " cab bit find the item"});
            }
            const client = await record.destroy()
            return res.json(client);
        } catch {
            //throw new Error('error creating record')
            return res.json({msg: ' fail to create', status: 500, route: "/update"});
        }
    }
}

export default new ClientController()