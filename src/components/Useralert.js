import React from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import { render } from "@testing-library/react";

const options = {
    position : 'bottom center',
    timeout: 5000,
    offset: '30px', 
    transitions: 'scale'
}

const Useralert = () => (
    <AlertProvider template={AlertTemplate}>
        <index />
    </AlertProvider>
)

render(<Useralert />, document.getElementById('useralert'));