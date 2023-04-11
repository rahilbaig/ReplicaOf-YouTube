import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
const Sidebar=()=>{
    let list=[
        {image:"/images/home.png",link:"Home"},
        {image:"/images/shortss.png",link:"Shorts"},
        {image:"/images/subsription.png",link:"subscription"},
        {image:"/images/moviee.png",link:"library"},
        {image:"/images/hystory.png",link:"History"},
        {image:"/images/play.png",link:"Your videos"},
        {image:"/images/watchlater.png",link:"Watch lates"},
        {image:"/images/like.png",link:"Liked videos"},
        {image:"/images/live.png",link:"Live"},
        {image:"/images/movie.png",link:"Movies"},
        {image:"/images/sport.png",link:"Sports"},
    ]
    return(
        <div className='sidee'>
            <ul>
                {
                    list.map((data)=>{
                        return(
                           <div className='sidebar'>
                            <li>
                                <img src={data.image} alt="" />
                                <Link to="">{data.link}</Link>
                            </li>
                           </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Sidebar