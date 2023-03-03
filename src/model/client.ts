import {DataTypes, Model} from "sequelize";
import db from "../config/db.config";

interface ClientAttr {
    id: string,
    title: string,
    name: string
}

export class ClientInstance extends Model<ClientAttr> {
}

ClientInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize:db,
        tableName: 'Clients'
    }
)