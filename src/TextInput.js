import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
            </div>
        );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
};


export default TextInput;