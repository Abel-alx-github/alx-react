import React from "react";
import App from './App'
import { render } from  '@testing-library/react'

it('does render without crashing', () => {
    render (
        < App />
    )
})