const IDCardItem = (props) => {
    return (
        <div className="card my-3 mx-3 p-3 w-25 float-start">
            <div classMame="card-body my-3">
                <h4 className="card-title bg-light">{props.name}</h4>
                <p className="card-text">{props.gender}</p>
                <p className="card-text">age: {props.age}</p>
                <p className="card-text">address: {props.address}</p>
            </div>
        </div>
    )
}

export default IDCardItem;

