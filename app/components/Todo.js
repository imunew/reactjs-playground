import React from "react";
import { ListItem } from 'material-ui/List';

export default class Todo extends React.Component {

    render () {
        const { complete, text } = this.props;

        return (
            <ListItem>
                <span>{complete}</span>
                <span>{text}</span>
            </ListItem>
        );
    }
}
