import React from "react";

class DisplayFormFilledData extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            address: "",
            gender: "",
        }

    }

    handleChange(event) {
        
    }

    render() {
        return (
            <>
                <p>Hi</p>
            </>
        )
    }
}


export default DisplayFormFilledData;
