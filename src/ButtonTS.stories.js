import React from 'react'
import {
    storiesOf
} from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react"
import {
    Button
} from './ButtonTS';
import {wInfo} from './utils';


storiesOf("Button in TypeScript", module)
.addWithJSX(
    "with default background", 
    wInfo(`
        Description of Button

        ~~~js
        <Button>Hello World</Button>
        ~~~
    `
    )(() => {
        return (
            <Button disabled={boolean('disabled', false)}>
                {text("text", "Hello World")}
            </Button>
        )
    })
)