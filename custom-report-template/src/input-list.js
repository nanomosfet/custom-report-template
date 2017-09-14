import React, { Component } from 'react';
import data from './data.js'

class Input extends Component {
    

    renderTextInput(input) {
        return (
            <div className="input-group">
                <span className="input-group-addon" id={input.name}>{input.label}</span>
                <input type={input.type} className="form-control" placeholder={"Enter " + input.label} aria-label={input.label} aria-describedby={input.name} />
            </div>
        );
    }

    renderRadioInput(input) {

    }

    render() {
        var input = this.props.input;
        return this.renderTextInput(input);
    }
}

class InputList extends Component {
    render() {
        const input = data.sections[0].subSections[0].inputs[0];
        return <Input input={input} />
    }

}

export default InputList;