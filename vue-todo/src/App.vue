<template>
    <h1>Todo List</h1>
    <form class="add-todo" @submit.prevent="onSubmit">
        <input type="text" v-model="newTodo" placeholder="Add New Todo" />
        <button type="submit" @click="addTodo">Add</button>
    </form>
    <div class="todos">
        <div
            class="todo"
            v-for="todo of todos"
            :key="todo.id"
            :style="isFinished(todo.finished)"
        >
            <h2>{{ todo.task }}</h2>
            <div>
                <input
                    type="checkbox"
                    name="finished"
                    v-model="todo.finished"
                />
                <button @click="deleteTodo(todo.id)">X</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface Todo {
    id: number;
    task: string;
    finished: boolean;
}

@Options({
    data: () => {
        return {
            todos: [
                {
                    id: 1,
                    task: 'Kerjain Frontend',
                    finished: false,
                },
                {
                    id: 2,
                    task: 'Kerjain Backend',
                    finished: false,
                },
                {
                    id: 3,
                    task: 'Deploy',
                    finished: false,
                },
            ],
            newTodo: '',
        };
    },
    methods: {
        addTodo() {
            if (!this.newTodo) {
                return;
            }
            this.todos = [
                {
                    id: this.todos[this.todos.length - 1].id + 1,
                    task: this.newTodo,
                    finished: false,
                },
                ...this.todos,
            ];

            this.newTodo = '';
        },
        deleteTodo(id: number) {
            this.todos = this.todos.filter((todo: Todo) => {
                return todo.id !== id;
            });
        },
        isFinished(status: boolean) {
            return status ? 'background: #3eaf7c' : '';
        },
    },
})
export default class App extends Vue {
    todos!: Array<Todo>;
    newTodo!: string;
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.todo {
    border: 1px solid black;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.7em;
    margin: 0.6em 0;

    button {
        margin-left: 0.5em;
        height: 1.6em;
        border: 1px solid #ff6961;
        border-radius: 3px;
        background: #ff5148;
        color: #fbfbfb;

        &:hover {
            background: #ff6961;
        }

        &:active {
            background: #ff392e;
        }
    }
}

.add-todo {
    input {
        margin-right: 0.4em;
        border-radius: 1rem;
        border: 1px solid #3eaf7c;
        line-height: 1.5rem;
        padding: 0 0.5em;

        &:focus {
            outline: 3px solid #3eaf7c;
        }
    }

    button {
        border-radius: 1rem;
        background: #3eaf7c;
        padding: 0.3em 0.7em;
        border: hidden;

        &:hover {
            background: #3ebf9c;
        }

        &:active {
            background: #3ebf75;
            outline: 1px solid #3eaf74;
        }
    }
}
</style>
