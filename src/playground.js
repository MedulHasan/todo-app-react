// destructuring
const state = {
    todos: [
        {
            id: '1',
            text: 'Todo 1 text',
            description: 'Todo 1 Description',
            time: new Date(),
            isComplete: true,
            isSelect: false,
        },
        {
            id: '2',
            text: 'Todo 2 text',
            description: 'Todo 2 Description',
            time: new Date(),
            isComplete: false,
            isSelect: false,
        },
    ],
};

const todo = {
    id: '3',
    text: 'Todo 2 text',
    description: 'Todo 2 Description',
    time: new Date(),
    isComplete: false,
    isSelect: false,
};

const todos = [todo, ...state.todos];
console.log(todos);
