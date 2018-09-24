import React from 'react'
import {
    storiesOf
} from "@storybook/react";
import { withInfo } from "@storybook/addon-info"
import {
    Button
} from './Button';


storiesOf("Button", module)
.addWithJSX(
    "with red background", 
    withInfo({
        styles: {
            header: {
                h1: {
                    color: 'red'
                }
            }
        },
        text: `
            Description of Button

            ~~~js
            <Button>Hello World</Button>
            ~~~
        `
    })(() => {
        return <Button bg="red">Hello World</Button>
    })
)