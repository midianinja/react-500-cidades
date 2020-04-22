import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Store from '../../store/Store';



const Snackbar = () => {
    const { state, dispatch } = useContext(Store);
    const hideClass = state.toast.show ? '' : 'hide'
    if (state.toast.show) {
        setTimeout(() => {
            dispatch({ type: 'HIDE_TOAST' });
        }, 5000);
    }

    return (
        <div className={`snackbar ${hideClass}`}>
            <img className="toast-icon" alt={state.toast.msg} src="/icons/green-check.svg" />
            {state.toast.msg}
        </div>
    )
};

Snackbar.propTypes = {
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.bool.isRequired,
    message: PropTypes.bool.isRequired,
}

export default Snackbar;