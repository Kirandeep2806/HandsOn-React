import '../styles/content.scss';
import data from './DataCollector';

function Content() {
    return (
        <div className='content-root'>
            {data.data.map(item => {
                return (
                    <div className="card">
                        <div className="card-content">
                            <p>{item.anime_id}.&nbsp;</p>
                            <p>{item.anime_name.toUpperCase().replace("_", " ")}</p>
                        </div>
                        <img src={item.anime_img} alt="anime" />
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Content;
