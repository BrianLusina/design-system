import React from 'react'
import {
    storiesOf
} from "@storybook/react";

storiesOf("Welcome", module).add("to your new storybook :tada:", () => {
    return <h1> Welcome to your Storbook </h1>
})