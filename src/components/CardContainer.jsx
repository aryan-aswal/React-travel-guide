import './CardContainer.css'
import Card from './Card'
function CardContainer(props) {
    return (
        <div className='cards'>
            {
                props.data.map((item, index)=>{
                    return <Card data={item} func={props.func} key={props.data[index].id}></Card>
                })
            }
        </div>
    )
}
export default CardContainer;