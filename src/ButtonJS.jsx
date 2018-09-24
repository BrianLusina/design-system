import React from 'react';
import { node, func, bool } from "prop-types";
import "./Button.css";

const noop = () => {}

export const Button = ({children, handleOnClick, disabled}) => {
    const disabledClass = disabled ? "button--disabled": "";
    return (
        <div
            className={`button ${disabledClass}`}
            onClick={!disabled ? handleOnClick : noop}
        >
            <span>{children}</span>
        </div>
    )
}

Button.defaultProps = {
    disabled: false
}

Button.propTypes = {
    /**
     * This dictates what the button will say
     */
    children: node.isRequired,
    /**
     * This dictates what the button will do when clicked
     */
    handleOnClick: func.isRequired,
    /**
     * Disables the handleOnClick function
     */
    disabled: bool
}