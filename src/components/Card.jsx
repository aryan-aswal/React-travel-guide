import { useState } from "react";
function Card(props) {
    const id = props.data.id;
    const name = props.data.place;
    const image = props.data.image;
    const price = props.data.price;
    const [info, setInfo] = useState(props.data.info.substring(0,200));
    const [readmore, setReadmore] = useState(true);
    function readMoreHandler() {
        setReadmore(!readmore);
        if(readmore) {
            setInfo(props.data.info);
        } else {
            setInfo(props.data.info.substring(0,200))
        }
    }
    function buttonHandler() {
        props.func(id);
    }
    return (
        <div id={id} className="card">
            <img src={image} alt="" />
            <div className="tour-details">
                <h4>{price}</h4>
                <h4>{name}</h4>
                <p>{info}... <span className="read-more" onClick={readMoreHandler}>{ readmore ? `Read More` : `Show Less` }</span></p>
            </div>
            <button className="btn" onClick={buttonHandler}>Not Interested</button>
        </div>
    )
}
export default Card;