import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../apis/todos';
import { Button, Checkbox, List, notification, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class ToDoItem extends Component {
    onToggleTodo = () => {
        const todo = this.props.todo

        toggleTodo(todo).then(response => {
            this.props.toggleTodo(response.data.id);
        }).catch(error => {
            this.props.deleteToDo(todo.id);

            notification['warning']({
                message: 'Toggling Failed',
                description: 'Todo has already been deleted.',
            });
        })
    }

    onRemoveItem = () => {
        const todoId = this.props.todo.id

        deleteTodo(todoId).catch(error => {
        }).finally(() => {
            this.props.deleteToDo(todoId);
        })
    }

    render() {
        const toggleTodoTooltip = "Mark as " + (this.props.todo.done ? "unfinished" : "finished")

        return (
            <List.Item className={'todo-list-item'}>
                <Tooltip placement="leftTop" title={toggleTodoTooltip}>
                    <Checkbox onClick={this.onToggleTodo} checked={this.props.todo.done}>
                        <span>{this.props.todo.text}</span>
                    </Checkbox>
                </Tooltip>
                <div>
                    <Tooltip placement="rightTop" title="Delete">
                        <Button icon={<DeleteOutlined />} onClick={this.onRemoveItem} />
                    </Tooltip>
                </div>
            </List.Item >
        );
    }
}

export default ToDoItem;