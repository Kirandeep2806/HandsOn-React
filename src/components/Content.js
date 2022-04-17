import '../styles/content.scss';
import data from './DataCollector';
import React from 'react';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        }
    }

    render() {
        return (
            <div className='content-root'>
                <p>User is Logged {this.state.isLoggedIn ? "In" : "Out"}</p>
                {data.data.map(item => {
                    return (
                        <div className="card">
                            <div className="card-content">
                                <p>{this.state.name} - </p>
                                <p>{item.anime_id}.&nbsp;</p>
                                <p>{item.anime_name.toUpperCase().replaceAll("_", " ")}</p>
                            </div>
                            <img src={item.anime_img} alt="anime" />
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Content;
