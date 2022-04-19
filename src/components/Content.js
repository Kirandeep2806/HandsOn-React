import '../styles/content.scss';
// import data from './DataCollector';
import React from 'react';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            message: "",
        }
    }

    async componentDidMount() {
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1').catch(err => console.log(err));
        if (!response) {
            this.setState((prevState) => ({
                message: "Make sure you are connected to the internet",
                data: prevState.data
            }))
        }
        const data = await response.json();
        data.success === true ? this.setState(prevState => ({ data: data.data, message: prevState.message })) : this.setState(prevState => ({ data: prevState.data, message: "Some error occured!!" }));
    }

    render() {
        return (
            <div className='content-root'>
                <p>User is Logged {this.state.isLoggedIn ? "In" : "Out"}</p>

                {typeof(this.state.message) == 'string' && !this.state.message.length&1 ?
                    this.state.data.length > 0 ?
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
                        :
                        <p>{this.state.message}</p>
                }
            </div>
        );
    }
}

export default Content;
