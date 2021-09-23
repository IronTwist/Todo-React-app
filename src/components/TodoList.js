import React,{Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return(
            <ul>
                {this.props.notes.map((note, index) => {
                    const itemProps = {
                        noteDisplay: note.name,
                        noteDone: note.done,
                        dataId: "note"+index,
                    }
                    return  <div key={"elem"+index}>
                            <div className="listItem" id={index} key={"div"+index} onClick={() => this.props.checkNote(index, note.name)}>
                                    <TodoItem key={index.toString()} {...itemProps} />
                            </div>
                            <button className="deleteItemBtn" key={"btn" + index} onClick={() => this.props.deleteNote(index)}>X</button>
                            </div>
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    checkNote: PropTypes.func,
    deleteNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.object),
}

export default TodoList;