import React from 'react'
import {
    storiesOf
} from "@storybook/react";
import { color } from "@storybook/addon-knobs/react"
import {
    Button
} from './Button';
import {wInfo} from './utils';


storiesOf("Button", module)
.addWithJSX(
    "with red background", 
    wInfo(`
        Description of Button

        ~~~js
        <Button>Hello World</Button>
        ~~~
    `
    )(() => {
        return <Button bg={color("background", "red", "group1")}>Hello World</Button>
    })
)