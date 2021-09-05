/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React from 'react';
import { Button, CustomInput, ListGroup, ListGroupItem } from 'reactstrap';

const ListItem = ({ todo, toggleSelect, toggleComplete }) => (
    <ListGroupItem className="d-flex align-items-center">
        <CustomInput
            type="checkbox"
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect(todo.id)}
        />
        <div className="mx-3">
            <h4>{todo.text}</h4>
            <p>{todo.time.toDateString()}</p>
        </div>
        <Button
            className="ms-auto"
            color={todo.isComplete ? 'danger' : 'success'}
            onClick={() => toggleComplete(todo.id)}
        >
            {todo.isComplete ? 'Complete' : 'Running'}
        </Button>
    </ListGroupItem>
);

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => (
    <ListGroup>
        {todos.map((todo) => (
            <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />
        ))}
    </ListGroup>
);

ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
