import CartWidget from "../CartWidget/CartWidget"

const navbar = () => {
    return (
        <nav>
            <h3>tienda</h3>
            <div>
                <button>celulares</button>
                <button>tablets</button>
                <button>notebooks</button>
            </div>
            <CartWidget /> 
        </nav>
    )
}
export default navbar 