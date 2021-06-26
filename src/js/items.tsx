import React from 'react';
import Item from './item';

export default class Items extends React.Component<any, any> {
    render() {
        let key = 0;
        const items = this.props.items.map((item: any) => {
            return <Item item={item} key={++key}/>
        });

        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }
}
