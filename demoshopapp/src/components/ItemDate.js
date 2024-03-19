import './ItemDate.css';

function ItemDate(props) {
    // const date = 17;
    // const month = 'August';
    // const year = 2023;

    return(
    <div className='date'>
        <span>{props.day}</span>
        <span> {props.month}</span>
        <span> {props.year}</span>
    </div>)
}

export default ItemDate;