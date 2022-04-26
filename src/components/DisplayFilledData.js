import { useNavigate } from "react-router-dom";

const DisplayFilledData = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Address: {props.address}</p>
            <p>Gender: {props.gender}</p>
            <p>Language: {props.lang.join(', ')}</p>
            <button
                onClick={() => navigate('/')}
                onSubmit={event => event.preventDefault()} >Go to home page
            </button>
        </>

    )
}

export default DisplayFilledData;
