import IDCardList from "./IDCardList";

const CardPage = () => {
    return (
        <div>
            <h5 className="p-3" >MANAGE MY CARD</h5>
            <div className='bg-info' style={{ height: '300px' }}>
                <h1 className="text-white p-3">Ready to use your card?
                </h1>
            </div>
            <h1 className="p-3 text-center">Manage Your Card</h1>
            <IDCardList />

        </div>
    )
}

export default CardPage;