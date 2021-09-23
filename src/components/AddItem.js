import React from 'react';

class AddItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          note: "",
        };
    }

    onInputValue = (inputText) => {
        this.setState({
            note: inputText,
        })
    }

    render() {
        const {addNote} = this.props;
        const {note} = this.state;
        return (
            <>
                <input
                    className="inputNote"
                    id="addNote"
                    type="text"
                    name="addNote"
                    placeholder="Type something here"
                    onChange={(elem) => this.onInputValue(elem.target.value)}
                />
                <button className="addNoteBtn" onClick={() => addNote(note)}>+</button>
            </>
        );
    }
}

export default AddItem;