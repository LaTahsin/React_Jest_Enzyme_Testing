import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
    }

    changeToggle() {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    render() {
        return (
            <div>
                <h1>This is toggle app</h1>
                <button onClick={() => this.changeToggle()}>Click</button>
                {this.state.toggle && <p>some text</p>}
            </div>
        )
    }
}
