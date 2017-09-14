import React, { Component } from 'react';
import data from './data.js'

class TextInput extends Component {
    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon" id="age">Age</span>
                <input type="text" className="form-control" placeholder="Enter Age" aria-label="Username" aria-describedby="age" />
            </div>
        );
    }
}

class InputList extends Component {
    render() {
        return <TextInput />
    }

}

export default InputList;