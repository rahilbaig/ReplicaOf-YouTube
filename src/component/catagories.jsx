import { Link } from 'react-router-dom';
import '../styles/catagories.css'
const Catagories = () => {
    let catlist=[
        {cat:"News"},
        {cat:"Movies"},
        {cat:"Sports"},
        {cat:"Comedy"},
        {cat:"Songs"},
        {cat:"Shorts"},
        {cat:"BestMovies"},
        {cat:"AboutIndia"},
        {cat:"Country"},
        {cat:"Java"},
        {cat:"subscribed"}
    ]
    return ( 
        <div className="catt">
           <ul>
           {
                catlist.map((data)=>{
                    return(
                        <div className='cut'>
                           <li>
                           <Link to="">{data.cat}</Link>
                           </li>
                        </div>
                    )
                })
            }
           </ul>
        </div>
     );
}
 
export default Catagories;