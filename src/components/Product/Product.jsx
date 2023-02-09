import { FiHeart } from "react-icons/fi"
import "./Product.scss"

export default function({record}) {
    return (
        <div>
            <div className="product-img-container">
                <img className="product-img" src={record.picture}/>
                <FiHeart className="button-wishlist"/>
            </div>
            <h5>{record.artist}</h5>
            <p>{record.title}</p>
            <span>{record.year}</span>
            <span>{record.price}</span>
            <div>
                <button className="add-to-cart">Zum Warenkorb hinzufügen</button>
            </div>
        </div>
    )
}