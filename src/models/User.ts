import { Model , DataTypes} from 'sequelize';
import { sequelize } from '../instances/pg'

export interface UserInstance extends Model {
    id: number,
    name: string,
    email: string,
    age: number
};

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'crud-users',
    timestamps: false
});