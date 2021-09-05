/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';
import Controller from '../controlers/index';
import CreateTodoForm from '../create-todo-form/index';
import ListView from '../listview/index';
import TableView from '../tableview/index';



class Todos extends React.Component {
    state = {
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
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all',
    };

    toggleSelect = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find((t) => t.id === todoId)
        todo.isSelect = !todo.isSelect;

        this.setState({todos})
    }
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find((t) => t.id === todoId)
        todo.isComplete = !todo.isComplete;

        this.setState({todos})
    }
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    handleSearch = (value) => {
        this.setState({
            searchTerm: value
        })
    } 
    createTodo = (todo) => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos];
        this.setState({todos})
        this.toggleForm();
    }

    handleFilter = (filter) => {
        this.setState({
            filter,
        })
    }
    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos})
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => todo.isComplete !== true);
        this.setState({todos})
    }
    reset = () => {
        this.setState({
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filter: 'all',
        })
    }

    performSearch = () => this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    performFilter = (todos) => {
        const {filter} = this.state;
        if(filter === 'completed') {
            return todos.filter(todo => todo.isComplete);
        } else if(filter === 'running') {
            return todos.filter(todo => !todo.isComplete);
        } else {
            return todos;
        }
    }

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        // console.log(todos);
        return this.state.view === 'list' ? (
            <ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
        ) : (
            <TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
        )
    };

    render() {
        return (
            <div>
                <h1 className="display-5 text-center mx-5">React ToDo Application</h1>;
                <Controller 
                    term={this.state.searchTerm} 
                    handleSearch={this.handleSearch} 
                    toggleForm={this.toggleForm} 
                    view={this.state.view} 
                    changeView={this.changeView} 
                    handleFilter={this.handleFilter} 
                    clearSelected={this.clearSelected} 
                    clearCompleted={this.clearCompleted} 
                    reset={this.reset} />
                <div>
                    {this.getView()}
                </div>
                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;
