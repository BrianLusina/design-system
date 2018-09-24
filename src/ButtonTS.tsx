import React from 'react';
import { ReactNode } from 'react'
import "./Button.css";


export interface Props {
    children: ReactNode,
    handleOnClick: () => void,
    disabled?: boolean
}

const noop = () => {}

export const Button = (props: Props) => {
    const { children, handleOnClick, disabled } = props,
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
