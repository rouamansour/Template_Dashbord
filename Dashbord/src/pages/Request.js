import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Request extends Component {

    constructor(props) {
        super(props);
        this.state = { demds: [] }
        this.refreshList();
    }


    refreshList() {
        fetch('https://localhost:7187/api/Request')
            .then(response => response.json())
            .then(data => {
                this.setState({ demds: data });
            });
    }

    // componentDidMount(){
    //     this.refreshList();
    // }

    // componentDidUpdate(){
    //     this.refreshList();
    // }

    render() {
        const { demds } = this.state;

        return (
             <div className="mt-4" striped bordered hover size="sm">
                <table>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Comment</th>
                        <th>Title</th>
                        <th rowSpan={2}>Deadline</th>
                        <th>Type request</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                        {demds.map(dep =>
                            <tr key={dep.requestId}>
                                <td>{dep.number}</td>
                                <td>{dep.comment}</td>
                                <td>{dep.title}</td>
                                <td>{dep.deadline}</td>
                                <td>{dep.typeRequestTypeId}</td>
                                <td>Edit /Delete</td>
                            </tr>)}
                    </tbody>
                </table>
             </div>
        )
    }
}