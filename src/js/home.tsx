import React from 'react';
import Item from './item';
import ItemForm from './item-form';
import Items from "./items";
import {ItemsState} from "./interfaces";

export default class Home extends React.Component<any, ItemsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    "id": 1,
                    "message": "本文01",
                    "title": "タイトル01"
                },
                {
                    "id": 2,
                    "message": "本文02",
                    "title": "タイトル02"
                },
            ]
        };
    }

    addItem(title: string, message: string) {
        this.state.items.push({
            id: this.state.items.length + 1,
            title: title,
            message: message
        });
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <ItemForm addItem={this.addItem.bind(this)} />
                <Items items={this.state.items} />
            </div>
        );
    }
}
