import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../apis/todos';
import { Button, Checkbox, List, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class ToDoItem extends Component {
    onToggleTodo = () => {
        toggleTodo(this.props.todo).then(response => {
            this.props.toggleTodo(response.data.id);
        })
    }

    onRemoveItem = () => {
        const todoId = this.props.todo.id

        deleteTodo(todoId).then(response => {
            this.props.deleteToDo(todoId);
        })
    }

    render() {
        const toggleTodoTooltip = "Mark todo as " + (this.props.todo.done ? "unfinished" : "finished")

        return (
            <List.Item>
                <Tooltip placement="leftTop" title={toggleTodoTooltip}>
                    <Checkbox onClick={this.onToggleTodo} checked={this.props.todo.done}>
                        <span>{this.props.todo.text}</span>
                    </Checkbox>
                </Tooltip>
                <div>
                    <Tooltip placement="rightTop" title="Delete todo">
                        <Button icon={<DeleteOutlined />} onClick={this.onRemoveItem} />
                    </Tooltip>
                </div>
            </List.Item >
        );
    }
}

export default ToDoItem;