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
                <input type={"checkbox"} /> Javascript
                <input type={"checkbox"} /> React
                <input type={"checkbox"} /> Redux
            </label>
            <br />
        </form>
    )
}
