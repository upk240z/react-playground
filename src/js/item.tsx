import React from 'react';
import {ItemState} from "./interfaces";

export default class Item extends React.Component<any, ItemState> {
    render() {
        return (
            <li className="list-group-item">
                <div className="media-body">
                    <strong>{this.props.item.item}</strong>
                    <p>{this.props.item.message}</p>
                </div>
            </li>
        );
    }
}
