import React from 'react'
import {
    storiesOf
} from "@storybook/react";
import {
    Button
} from './Button';


storiesOf("Button", module).add("with red background",() => {
    return <Button bg="red">Hello World</Button>
})