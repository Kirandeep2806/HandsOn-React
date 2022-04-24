import React from "react"

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
            <form>
                <label>
                    Name : <input type={"text"} onChange={this.handleChange} name='name' />
                </label>
                <br />
                <label>
                    Email : <input type={"email"} name='email' onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password : <input type={"password"} name='password' onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Address : <textarea name="address" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Gender :
                    <input type={"radio"} name="gender" value={"male"} onChange={this.handleChange} /> Male
                </label>
                <label>
                    <input type={"radio"} name="gender" value={"female"} onChange={this.handleChange} /> Female
                </label>
                <br />
                <div onChange={this.handleChange}>
                    <label>
                        <input type={"checkbox"} name="python" />Python
                    </label>
                    <br />
                    <label>
                        <input type={"checkbox"} name="javascript" />JavaScript
                    </label>
                    <br />
                    <label>
                        <input type={"checkbox"} name="react" />React.js
                    </label>
                </div>


                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Password: {this.state.password}</p>
                <p>Address: {this.state.address}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Language: {this.state.lang.join(', ')}</p>
            </form>
        )
    }
}
