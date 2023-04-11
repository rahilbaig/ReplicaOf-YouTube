import "../styles/addvideo.css"
import forest from "../images/forest.jpg"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Addvideo = () => {

    let navigate=useNavigate()

    let titel=useRef(null)
    let thumbnail=useRef(null)
    let channelname=useRef(null)
    let views=useRef(null)

    let submit=(e)=>{
        e.preventDefault()
        let data={
            titel:titel.current.value,
            thumbnail:thumbnail.current.value,
            channelname:channelname.current.value,
            views:views.current.value
        }
        fetch("http://localhost:4000/videodata",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("video added.............")
        navigate('/')
    }
    return ( 
        <div className="addd">
            <div className="addvideo">
            <div className="leftadd">
                <h1>Add videos to YouTube</h1>
                
                <form className="frm" action=""  onSubmit={submit}>
                    <input ref={titel} placeholder="Titel" type="text" />
                    <input ref={thumbnail} placeholder="Thumbnail" type="text" />
                    <input ref={channelname} placeholder="Channelname" type="text" />
                    <input ref={views} placeholder="views" type="number" />
                    <button type="submit">Add Video</button>
                </form>
            </div>
            <div className="rightadd">
                <img height="600px" width="500px" src={forest} alt="" />
            </div>

        </div>
        </div>
     );
}
 
export default Addvideo;