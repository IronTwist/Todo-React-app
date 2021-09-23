import React from 'react';
import PropTypes from "prop-types";

const TodoItem = ({dataId, noteDisplay, noteDone}) => (
        <li className={noteDone? "strikeTrough": ""}
            id={dataId}
        >{noteDisplay}
        </li>
);

TodoItem.propTypes = {
        dataId: PropTypes.string,
        noteDisplay: PropTypes.string,
        noteDone: PropTypes.bool
}

export default TodoItem;