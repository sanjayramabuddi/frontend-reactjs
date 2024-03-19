import './Item.css'

function Item(props) {
    return (<h3 className = "head">{props.name}</h3>);
}

export default Item;