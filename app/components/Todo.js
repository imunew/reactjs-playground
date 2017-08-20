import React from "react";
import { ListItem } from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import * as TodoAction from "./../actions/TodoAction";

export default class Todo extends React.Component {

    onClickDeleteIcon(e) {
        const { id } = this.props;
        TodoAction.deleteTodo(id);
    }

    render () {
        const { complete, text } = this.props;

        return (
            <ListItem rightIcon={<ActionDelete onClick={this.onClickDeleteIcon.bind(this)} />}>
                <span>{complete}</span>
                <span>{text}</span>
            </ListItem>
        );
    }
}
