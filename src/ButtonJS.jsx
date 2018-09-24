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

Button.propTypes = {
    children: node,
    handleOnClick: func,
    disabled: bool
}