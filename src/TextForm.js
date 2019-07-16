import React from 'react';

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'How do you feel about React?' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Here are your thoughts: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Share Your Thoughts:
                        <br></br>
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        <br></br>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };
};

export default TextForm;