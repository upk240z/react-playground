import React from 'react';

export default class ItemForm extends React.Component<any, any> {
    handle(e: any) {
        e.preventDefault();
        this.props.addItem(e.target.title.value, e.target.message.value);
    }

    render() {
        return (
            <form onSubmit={this.handle.bind(this)} className="mb-3">
                <div className="row mb-3">
                    <div className="col-6">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" placeholder="title"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="message">Message</label>
                        <input type="text" className="form-control" name="message" placeholder="message"/>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
}
