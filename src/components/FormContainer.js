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
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <form>
                <label>
                    Name : <input type={"text"} onChange={this.handleChange} name='name'  />
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


                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Password: {this.state.password}</p>
                <p>Address: {this.state.address}</p>
                <p>Gender: {this.state.gender}</p>
            </form>
        )
    }
}
