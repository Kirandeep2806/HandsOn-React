export default function Form(props) {
    return (
        <form>
            <label>
                Name : <input type={"text"} onChange={props.handleChange} name='name' />
            </label>
            <br />
            <label>
                Email : <input type={"email"} name='email' onChange={props.handleChange} />
            </label>
            <br />
            <label>
                Password : <input type={"password"} name='password' onChange={props.handleChange} />
            </label>
            <br />
            <label>
                Address : <textarea name="address" onChange={props.handleChange} />
            </label>
            <br />
            <div onChange={props.handleChange}>
                <label>
                    Gender :
                    <input type={"radio"} name="gender" value={"male"} /> Male
                </label>
                <label>
                    <input type={"radio"} name="gender" value={"female"} /> Female
                </label>
            </div>
            <br />
            <div onChange={props.handleChange}>
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


            <p>Name: {props.data.name}</p>
            <p>Email: {props.data.email}</p>
            <p>Password: {props.data.password}</p>
            <p>Address: {props.data.address}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Language: {props.data.lang.join(', ')}</p>
        </form>
    )
}
