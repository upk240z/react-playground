import React from 'react';

export default class Clock extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            date: new Date()
        };

        setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    render() {
        return (
            <p>
                { this.state.date.toLocaleDateString() }
                &nbsp;
                { this.state.date.toLocaleTimeString() }
            </p>
        );
    }
}
