import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTitleAction } from '../../redux/actions/action';

function MainPages(props) {
const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(changeTitleAction())}>change title</button>

        </div>
    );
}

export default MainPages;