// import React from "react";
import DisplayFormFilledData from "./DisplayFormFilledData"

export default function FormContainer() {
    return (
        <form>
            <label>
                Name : <input type={"text"} />
            </label>
            <br />
            <label>
                Email : <input type={"email"} />
            </label>
            <br />
            <label>
                Password : <input type={"password"} />
            </label>
            <br />
            <label>
                Address : <textarea />
            </label>
            <br />
            <label>
                Gender :
                <input type={"radio"} name="gender" value={"male"} /> Male
            </label>
            <label>
                <input type={"radio"} name="gender" value={"female"} /> Female
            </label>
        </form>
    )
}
