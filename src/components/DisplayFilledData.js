const DisplayFilledData = (props) => {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Address: {props.address}</p>
            <p>Gender: {props.gender}</p>
            <p>Language: {props.lang.join(', ')}</p>
        </>
    )
}

export default DisplayFilledData;
