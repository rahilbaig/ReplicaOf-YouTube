import { useState } from "react"

const Videocard = (props) => {
    let vvv=props.abcd
    let [data, setdata] = useState(vvv)
    function Notinterest(id) {
        let result = data.filter(x => x.id !== id)
        setdata(result)
    }
    return ( 
        <div className="vid">
            {
            vvv.map((vdo) => {
                return (
                    <div className='block'>
                       
                            <img src={vdo.thumbnail} height="206" width="360" alt="" />
                            <h3>{vdo.titel}</h3>
                           <div className='abcd'>
                           <div>
                           <p>{vdo.channelname}</p>
                            <p>{vdo.views}</p>
                           </div>
                            <div>
                            <a onClick={() => Notinterest(vdo.id)}>Not Interest</a>
                            </div>
                           </div>
                           
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default Videocard;