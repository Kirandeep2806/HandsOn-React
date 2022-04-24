import React from "react";
import Form from "./Form";

export default class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            gender: '',
            lang: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.target.type === 'checkbox' ?
            event.target.checked ?
                this.setState({ lang: [...this.state.lang, event.target.name] })
                :
                this.setState({ lang: this.state.lang.filter(item => item != event.target.name) })
            :
            this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <Form
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}
