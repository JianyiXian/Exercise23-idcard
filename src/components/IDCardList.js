import IDCardItem from "./IDCardItem"
import DATA from '../data.json'

const IDCardList = () => {
    return (
        <div className="container">
            {DATA.map((data) => (<IDCardItem key={data._id} name={data.name} gender={data.gender} age={data.age} address={data.address} />))}
        </div >
    )
}

export default IDCardList;