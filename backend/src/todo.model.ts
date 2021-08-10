import { Model } from 'objection';
import jsonSchema from './todo.schema.json';

export default class Todo extends Model {
    id!: string;
    todo!: string;
    finished!: boolean;

    static tableName = 'todo';

    static jsonSchema = jsonSchema;
}
