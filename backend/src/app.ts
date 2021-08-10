import compression from 'compression';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

require('dotenv').config();

const app = express();

import './db';
import Todo from './todo.model';

app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', async (_req: Request, res: Response) => {
    const todos: Array<Todo> = await Todo.query();

    res.status(200).json({
        todos,
    });
});

app.post('/', async (req: Request, res: Response) => {
    const todo: Todo = await Todo.query().insert(req.body);

    res.status(200).json({
        todo,
    });
});

app.patch('/:id', async (req: Request, res: Response) => {
    const todo: Todo = await Todo.query().patchAndFetchById(
        req.params.id,
        req.body
    );

    res.status(200).json({
        todo,
    });
});

app.delete('/:id', async (req: Request, res: Response) => {
    const todo: Todo = await Todo.query()
        .deleteById(req.params.id)
        .returning('*')
        .first();

    res.status(200).json({
        todo,
    });
});

const PORT: number = (process.env.PORT as number | undefined) || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
