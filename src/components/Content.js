import '../styles/content.scss';
// import data from './DataCollector';
import React from 'react';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
        const data = await response.json();
        data.success === true ? this.setState({ data: data.data }) : this.setState({ data: [] });
    }

    render() {
        return (
            <div className='content-root'>
                <p>User is Logged {this.state.isLoggedIn ? "In" : "Out"}</p>
                {this.state.data.length > 0 ?
                    this.state.data.map((item, index) => {
                        return (
                            <div className="card" key={index} >
                                <div className="card-content">
                                    <p>{item.anime_id}.&nbsp;</p>
                                    <p>{item.anime_name.toUpperCase().replaceAll("_", " ")}</p>
                                </div>
                                <img src={item.anime_img} alt="anime" onClick={function () { alert("Image is clicked!") }} />
                            </div>
                        )
                    })
                    :
                    <h1>Fetching the Data</h1>
                }
            </div>
        );
    }
}

export default Content;
