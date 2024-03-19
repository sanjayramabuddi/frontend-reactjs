import Cards from "./Cards";

function Tours({ tours, removeCard }) {
    return (
        <>
            <div>
                <h2>Plan with Love</h2>
            </div>
            <div>
                {
                    tours.map((tour) => {
                        return <Cards {...tour} removeCard={removeCard}></Cards>
                    })
                }
            </div>
        </>
    );
}

export default Tours;