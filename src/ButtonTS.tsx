import React from 'react';
import { ReactNode } from 'react'
import "./Button.css";

export interface Props {
    /**
     * This dictates what the button will say
     */
    children: ReactNode,
    /**
     * This dictates what the button will do when clicked
     */
    handleOnClick: () => void,
    /**
     * disables the handleOnClick function
     * 
     * @default false
     */
    disabled?: boolean
}

const noop = () => {}

export const Button = (props: Props) => {
    const { children, handleOnClick, disabled } = props;
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
