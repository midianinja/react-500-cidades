import React, { useState } from 'react';
import './styles.css';



const Snackbar = ({
    props,
    isActive,
    setIsActive,
    message,
}) => {
    const [isActive, setIsActive] = useState(false);
    const openSnackBar = (message = 'Something went wrong...') => {
        message = message;
        this.setIsActive({ isActive: true }, () => {
            setTimeout(() => {
                this.setIsActive({ isActive: false });
            }, 3000);
        });
    }
    return (
        <div className={isActive ? ['snackbar', 'show'].join(" ") : 'snackbar'}>
            {message}
        </div>
    )
};
