const todos = [
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
        text: 'Todo 2',
        description: 'Todo 2 Description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
    },
    {
        id: '3',
        text: 'Todo 3',
        description: 'Todo 3 Description',
        time: new Date(),
        isComplete: false,
        isSelect: false,
    },
];

const x = todos.filter((todo) => todo.text.includes(''));
console.log(x);
