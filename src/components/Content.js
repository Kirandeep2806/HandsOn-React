import '../styles/content.scss';

const Card = ({ title, text }) => {
    // console.log(props);
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}

export default Card;
