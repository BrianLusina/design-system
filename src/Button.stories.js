import React from 'react'
import {
    storiesOf
} from "@storybook/react";
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
        return <Button bg="red">Hello World</Button>
    })
)