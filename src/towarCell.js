import './towarCell.css';

function TowarCell(props){
    return(
        <div className='towarCell'>
            <img src={props.products.img}/>
            <h1>{props.products.name}</h1>
            <p>Opis: {props.products.desc}</p>
            <p>Na stanie: {props.products.instock}</p>
            <h2>{props.products.price} zł</h2>
        </div>
    );
}

export default TowarCell;